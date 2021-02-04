import store from "@/store/index";
import _ from "lodash";

import mobileDesignerToIDE from "@/utils/mobileDesignerToIDE";
import DeleteService from "@/service/DeleteService";
import CreateService from "@/service/CreateService";
import makeForIDEInfo from "@/utils/makeForIDEInfo";
import ChangePositionService from "@/service/ChangePositionService";
import MultiCommandService from "@/service/MultiCommandService";

export default {
    deleteFromIDE(args) {
        console.log('Delete Control from IDE');
        const obj = JSON.parse(args);
        const deleteItemUid = obj['controlUniqueId'];

        if (deleteItemUid) {
            const control = store.state.component.items.find(item => item.uid === deleteItemUid);
            DeleteService.deleteControl(control.$el);
        }
    },

    /*
    * 컨트롤 삭제 메세지 전달 함수 (Mobile Designer --> IDE)
    * */
    sendDeleteMessage(component, isMulti) {
        const parent = component.parentElement.closest('.dews-mobile-component')
        const parentUid = parent.getAttribute('uid');

        if (isMulti) {
            return {
                commandType: 'delete',
                elm: component,
                parentId: parentUid
            };
        }
        mobileDesignerToIDE({
            commandType: 'delete',
            elm: component,
            parentId: parentUid
        });
    },

    /*
    * 컨트롤 재정렬을 위한 컨트롤 삭제 로직
    * @param target
    * */
    reArrangeDelete(target) {
        Array.from(target.children).forEach(child => {
            if (child.getAttribute('uid')){
                DeleteService.sendDeleteMessage(child);
            }
            DeleteService.reArrangeDelete(child);
        });
    },

    /*
    * 컨트롤 삭제를 위한 공통 로직
    * */
    deleteControl(target) {
        if (!target) return;

        // IDE에서 삭제
        DeleteService.sendDeleteMessage(target);

        // 1) AreaItem이 하나만 남을 경우를 생각하여 splitDelete 함수 호출 후, replaceWith
        if (target.classList.contains('dews-item')) {
            DeleteService.deleteSplit(target);
            //MultiCommand-kjs
        }
        // 2) target의 자식 노드까지 drake.containers, Vuex items에서 삭제
        DeleteService.deleteTargetChild(target);

        // 3) target drake.containers, Vuex items에서 삭제
        DeleteService.deleteDrakeContainer(target);
        DeleteService.deleteItems(target);

        // 4) target 객체 제거
        target.parentElement.tagName === 'LI' ? target.parentElement.remove() : target.remove();

        // selectItem이 없으므로 null 처리
        window.selectedItem = null;
    },

    /*
    * deleteSplit 함수에서 조건에 따른 처리를 한 후, item 삭제
    * @param item - AreaItem, AreaPanel
    * */
    deleteSplitItems(item, hasChild) {
        // DeleteService.sendDeleteMessage(item);
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
        // const targetPanelNode = targetPanel.cloneNode(true);

        if (targetPanel.childElementCount === 2) {
            const targetSibling = target.nextSibling ? target.nextSibling : target.previousSibling;
            DeleteService.deleteSplitItems(targetSibling, targetSibling.hasChildNodes());
            DeleteService.deleteSplitItems(targetPanel, targetSibling.hasChildNodes());

            if (targetSibling.hasChildNodes()) {
                const multiCommand = [];
                const targetSiblingArea = targetSibling.firstElementChild;
                const targetPanelParent = targetPanel.parentElement.closest('.dews-mobile-component');

                targetPanel.replaceWith(...targetSibling.childNodes);
                multiCommand.push({ commandType: 'change_control', obj: targetSiblingArea });
                multiCommand.push({ commandType: 'delete', obj: targetPanelNode });

                // ChangePositionService.sendChangePositionMessage(targetSiblingArea);
                // mobileDesignerToIDE({
                //     commandType: 'delete',
                //     elm: targetPanelNode,
                //     parentId: targetPanelParent.getAttribute('uid')
                // });
                MultiCommandService.sendMultiCommand(multiCommand);
            }
        }
    },

    /*
    * target의 자식 노드 drake.containers와 Vuex items에서 삭제
    * @param target
    * */
    deleteTargetChild(target) {
        Array.from(target.children).forEach(child => {
            if (child.getAttribute('uid')) {
                DeleteService.sendDeleteMessage(child);
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
        const targetUid = target.getAttribute('uid');

        if (store.state.component.dragulaUid[targetUid]) {
            const targetDataUid = store.state.component.dragulaUid[targetUid];
            _.remove(window.drake.containers, function(container) {
                return container.dataset.uid === targetDataUid;
            });
            delete store.state.component.dragulaUid[targetUid];
        } else {
            _.remove(window.drake.containers, function(container) {
                return container.getAttribute('uid') === targetUid;
            });
        }
    },

    /*
    * Vuex의 items에 저장된 Control 삭제
    * @param target
    * */
    deleteItems(target) {
        _.remove(store.state.component.items, function(item) {
            return item.uid === target.getAttribute('uid');
        });
    },
}
