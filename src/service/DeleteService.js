import store from "@/store/index";
import _ from "lodash";

import mobileDesignerToIDE from "@/utils/mobileDesignerToIDE";
import DeleteService from "@/service/DeleteService";
import CreateService from "@/service/CreateService";

export default {
    deleteFromIDE(args) {
        console.log('Delete Control from IDE');
        const obj = JSON.parse(args);
        // 1) ID 추출
        const deleteItemUid = obj['controlUniqueId'];
        if (deleteItemUid) {
            let control = store.state.component.items.find(item => item.uid === deleteItemUid);
            DeleteService.deleteControl(control.$el);
        }
    },

    /*
    * 컨트롤 삭제 메세지 전달 함수 (Mobile Designer --> IDE)
    * */
    sendDeleteMessage(component) {
        const parent = component.parentElement.closest('.dews-mobile-component')
        const parentUid = parent.getAttribute('uid');

        mobileDesignerToIDE("delete", component, parentUid);
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
        if (target.classList.contains('dews-item')) DeleteService.deleteSplit(target);

        // 2) target의 자식 노드까지 drake.containers, Vuex items에서 삭제
        DeleteService.deleteTargetChild(target);

        // 3) target drake.containers, Vuex items에서 삭제
        DeleteService.deleteDrakeContainer(target);
        DeleteService.deleteItems(target);

        // 4) target 객체 제거
        target.remove();

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

        if (targetPanel.childElementCount === 2) {
            const targetSibling = target.nextSibling ? target.nextSibling : target.previousSibling;

            DeleteService.deleteSplitItems(targetSibling, targetSibling.hasChildNodes());
            DeleteService.deleteSplitItems(targetPanel, targetSibling.hasChildNodes());

            if (targetSibling.hasChildNodes()) {
                // const _childElement = [...targetSibling.children]
                // _childElement.forEach(element => {
                //     DeleteService.sendDeleteMessage(element);
                //     DeleteService.reArrangeDelete(element);
                // });

                targetPanel.replaceWith(...targetSibling.childNodes);
                CreateService.sendCreateMessage(targetSibling)
                // _childElement.forEach(element => {
                //     CreateService.sendCreateMessage(element);
                //     CreateService.reArrangeCreate(element);
                // });
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
                // DeleteService.sendDeleteMessage(child);
                DeleteService.deleteDrakeContainer(child);
                DeleteService.deleteItems(child);
            }
            DeleteService.deleteTargetChild(child);
        });
    },

    /*
    * Dragula의 drake.containers에 저장된 Control 정보 삭제
    * @param target
    * */
    deleteDrakeContainer(target) {
        const targetUid = target.getAttribute('uid');

        // target의 root element의 uid 정보가 root에 포함되어 있지 않은 경우 data-uid로 판단
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
