import store from "@/store/index";
import _ from "lodash";

import mobileDesignerToIDE from "@/utils/mobileDesignerToIDE";
import DeleteService from "@/service/DeleteService";
import MultiCommandService from "@/service/MultiCommandService";

export default {
    deleteFromIDE(args, isUndoRedo) {
        console.log('Delete Control from IDE');
        const obj = JSON.parse(args);
        const deleteItemUid = obj['controlUniqueId'];

        if (deleteItemUid) {
            const control = store.state.component.items.find(item => item.uid === deleteItemUid);
            DeleteService.deleteControl(control.$el, isUndoRedo);
        }
    },

    /*
    * 컨트롤 삭제 메세지 전달 함수 (Mobile Designer --> IDE)
    * */
    sendDeleteMessage(control) {
        const parent = control.parentElement?.closest('.dews-mobile-component');
        const parentUid = parent?.getAttribute('uid');

        mobileDesignerToIDE({
            commandType: 'delete',
            elm: control,
            parentId: parentUid
        });
    },

    /*
    * MultiCommand를 위한 삭제 메세지 전달 함수
    * */
    multiDeleteMessage(control) {
        const parent = control.parentElement?.closest('.dews-mobile-component');
        const parentUid = control.parentUid ? control.parentUid : parent.getAttribute('uid');

        return {
            commandType: 'delete',
            elm: control.target,
            parentId: parentUid
        };
    },

    preventDeleteControl(target) {
        const preventDeleteList = ['dews-mobile-containerButton', 'dews-mobile-containerContent', 'dews-mobile-containerSummry'];
        if (preventDeleteList.includes(target.classList[0]))
            return true;
        return false;
    },

    /*
    * 컨트롤 삭제를 위한 공통 로직
    * */
    deleteControl(target, isUndoRedo) {

        if (DeleteService.preventDeleteControl(target))
            return;

        if (!target) return;

        // IDE에서 삭제
        // if (!isUndoRedo) DeleteService.sendDeleteMessage(target);

        // 1) AreaItem이 하나만 남을 경우를 생각하여 splitDelete 함수 호출 후, replaceWith
        if (target.classList.contains('dews-item')) {
            DeleteService.deleteSplit(target);
        } else if (!target.classList.contains('dews-item') && !isUndoRedo) {
            DeleteService.sendDeleteMessage(target);
        }
        // 2) target의 자식 노드까지 drake.containers, Vuex items에서 삭제
        DeleteService.deleteTargetChild(target);

        // 3) target drake.containers, Vuex items에서 삭제
        DeleteService.deleteDrakeContainer(target);
        DeleteService.deleteItems(target);

        // 4) target 객체 제거
        DeleteService.parentTargetDelete(target);

        // selectItem이 없으므로 null 처리
        window.selectedItem = null;
    },

    deleteTab(target) {
        let targetUid = target.getAttribute('uid');
        let dewsTabs = target.parentElement.closest('.dews-mobile-tabs');
        let titleList = dewsTabs.querySelector('.title-list');
        if (titleList) {
            let tabTitle = Array.from(titleList.children).find(x => x.getAttribute('data-tab') === targetUid);
            if (tabTitle) {
                tabTitle.remove();
                target.remove();
            }
        }
    },

    parentTargetDelete(target) {
        if (target.parentElement.tagName === 'LI')
            target.parentElement.remove();
        else if (target.classList.contains('dews-mobile-tab'))
            DeleteService.deleteTab(target);
        else if (target.parentElement.className == 'components item variable') //complex-type
            target.parentElement.remove();
        else
            target.remove();
    },

    /*
    * deleteSplit 함수에서 조건에 따른 처리를 한 후, item 삭제
    * @param item - AreaItem, AreaPanel
    * */
    deleteSplitItems(item, hasChild) {
        DeleteService.deleteDrakeContainer(item);
        DeleteService.deleteItems(item);

        if (!hasChild) item.remove();
    },

    /*
    * AreaItem이 하나만 남을 경우, replaceWith 하거나 delete
    * */
    deleteSplit(target) {
        const targetPanel = target.parentElement;
        const targetPanelNode = targetPanel.cloneNode();
        const targetPanelParentNode = targetPanel.parentElement.cloneNode();

        if (targetPanel.childElementCount === 2) {
            const multiCommand = [];
            const targetSibling = target.nextElementSibling ? target.nextElementSibling : target.previousElementSibling;
            DeleteService.deleteSplitItems(targetSibling, targetSibling.hasChildNodes());
            DeleteService.deleteSplitItems(targetPanel, targetSibling.hasChildNodes());

            if (targetSibling.hasChildNodes()) {
                const targetSiblingNode = targetSibling.cloneNode(true);
                targetPanel.replaceWith(...targetSibling.childNodes);

                Array.from(targetSiblingNode.children).forEach(child => {
                    multiCommand.push({
                        commandType: 'change_control',
                        obj: child,
                        parentUid: targetPanelParentNode.getAttribute('uid')
                    });
                })
                multiCommand.push({
                    commandType: 'delete',
                    obj: {target: targetPanelNode, parentUid: targetPanelParentNode.getAttribute('uid')}
                });
            } else {
                multiCommand.push({
                    commandType: 'delete',
                    obj: {target: target, parentUid: targetPanelNode.getAttribute('uid')}
                });
                multiCommand.push({
                    commandType: 'delete',
                    obj: {target: targetSibling, parentUid: targetPanelNode.getAttribute('uid')}
                });
                multiCommand.push({
                    commandType: 'delete',
                    obj: {target: targetPanelNode, parentUid: targetPanelParentNode.getAttribute('uid')}
                });
            }
            MultiCommandService.sendMultiCommand(multiCommand);
        } else if (targetPanel.childElementCount === 3) {
            DeleteService.sendDeleteMessage(target);
        }
    },

    /*
    * target의 자식 노드 drake.containers와 Vuex items에서 삭제
    * @param target
    * */
    deleteTargetChild(target) {
        Array.from(target.children).forEach(child => {
            if (child.getAttribute('uid')) {
                DeleteService.deleteDrakeContainer(child);
                DeleteService.deleteItems(child);
            }
            DeleteService.deleteTargetChild(child);
        });
    },

    /*
    * Dragula의 drake.containers에 저장된 Control 정보 삭제
    * target의 root element의 uid 정보가 root에 포함되어 있지 않은 경우 data-uid로 판단
    * @param target
    * */
    deleteDrakeContainer(target) {
        const targetUid = target.closest('.dews-mobile-component').getAttribute('uid');

        if (store.state.component.dragulaUid[targetUid]) {
            const targetDataUid = store.state.component.dragulaUid[targetUid];
            _.remove(window.drake.containers, function (container) {
                return container.dataset.uid === targetDataUid;
            });
            delete store.state.component.dragulaUid[targetUid];
        } else {
            _.remove(window.drake.containers, function (container) {
                return container.getAttribute('uid') === targetUid;
            });
        }
    },

    /*
    * Vuex의 items에 저장된 Control 삭제
    * @param target
    * */
    deleteItems(target) {
        _.remove(store.state.component.items, function (item) {
            return item.uid === target.getAttribute('uid');
        });
    },
}
