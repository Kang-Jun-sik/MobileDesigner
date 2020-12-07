import Vue from 'vue'
import _ from "lodash";
import store from "@/store/index";

import ControlService from "@/service/ControlService";
import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";

import Button from "@/components/Controls/DewsButton";
import AreaPanel from "@/components/Area/AreaPanel";
import AreaItem from "@/components/Area/AreaItem";
import AreaBox from "@/components/Area/AreaBox";
import AreaTabs from "@/components/Area/tab/AreaTabs";

import SearchContainer from "@/components/Containers/SearchContainer";
import FormContainer from "@/components/Containers/FormContainer";

export default {
    /*
    * 컨트롤 UID 생성
    * */
    createUid(target) {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return target + '-' + s4() + s4();
    },

    /*
    * 컴포넌트 추가 (Vuex에서 관리될 수 있도록 Vue Component 객체 생성)
    * */
    addComponent(type, param) {
        let component;
        switch (removeSpaceBetweenWord(type)) {
            case 'Button':
                component = Vue.extend(Button);
                break;
            case 'AreaPanel':
                component = Vue.extend(AreaPanel);
                break;
            case 'AreaItem':
                component = Vue.extend(AreaItem);
                break;
            case 'AreaBox':
                component = Vue.extend(AreaBox);
                break;
            case 'AreaTabs':
                component = Vue.extend(AreaTabs);
                break;
            case 'SearchContainer':
                component = Vue.extend(SearchContainer);
                break;
            case 'FormContainer':
                component = Vue.extend(FormContainer);
                break;
        }
        component = new component();
        component.$mount();
        return component;

        function removeSpaceBetweenWord(word) {
            return word.split(' ').join('');
        }
    },

    /*
    * 컨트롤 삭제 메세지 전달 함수 (Mobile Designer --> IDE)
    * */
    sendDeleteMessage(component) {
        // 부모 노드 찾기
        const parentNode = component.parentElement.closest('.dews-mobile-component');
        const parentUid = parentNode.getAttribute('uid');

        mobileDesignerToIDE("delete", component, parentUid);
    },

    /*
    * 컨트롤 삭제를 위한 공통 로직
    * */
    deleteControl(target) {
        // target이 존재하지 않다면 return
        if (!target) return;

        // 1) AreaItem이 하나만 남을 경우를 생각하여 splitDelete 함수 호출 후, replaceWith
        if (target.classList.contains('dews-item')) ControlService.deleteSplit(target);

        // 2) target의 자식 노드까지 drake.containers, Vuex items에서 삭제
        ControlService.deleteTargetChild(target);

        // 3) target drake.containers, Vuex items에서 삭제
        ControlService.deleteDrakeContainer(target);
        ControlService.deleteItems(target);

        // 4) target 객체 제거 및 IDE에서 제거
        target.remove();
        ControlService.sendDeleteMessage(target);

        // selectItem이 없으므로 null 처리
        window.selectedItem = null;
    },

    /*
    * AreaItem이 하나만 남을 경우, replaceWith 하거나 delete
    * */
    deleteSplit(target) {
        const targetPanel = target.parentElement;

        if (targetPanel.childElementCount === 2) {
            const targetSibling = target.nextSibling ? target.nextSibling : target.previousSibling;

            if (targetSibling.hasChildNodes()) {
                targetPanel.replaceWith(...targetSibling.childNodes);
                targetPanel.childNodes.forEach(child => {
                    ControlService.deleteDrakeContainer(child);
                    ControlService.deleteItems(child);
                });
            } else {
                ControlService.deleteSplitItems(targetSibling);
            }

            ControlService.deleteSplitItems(targetPanel);
        }
    },

    /*
    * deleteSplit 함수에서 조건에 따른 처리를 한 후, item 삭제
    * @param item - AreaItem, AreaPanel
    * */
    deleteSplitItems(item) {
        ControlService.deleteDrakeContainer(item);
        ControlService.deleteItems(item);
        item.remove();
    },

    /*
    * target의 자식 노드 drake.containers와 Vuex items에서 삭제
    * */
    deleteTargetChild(target) {
        Array.from(target.children).forEach(child => {
            if (child.getAttribute('uid')) {
                ControlService.deleteDrakeContainer(child);
                ControlService.deleteItems(child);
            }
            ControlService.deleteTargetChild(child);
        });
    },

    /*
    * Dragula의 drake.containers에 저장된 Control 정보 삭제
    * */
    deleteDrakeContainer(target) {
        const targetUid = target.getAttribute('uid');

        // target의 root element의 uid 정보가 root에 포함되어 있지 않은 경우 muid로 판단
        if (store.state.component.dragulaUid[targetUid]) {
            const mUid = store.state.component.dragulaUid[targetUid];
            _.remove(window.drake.containers, function(container) {
                return container.getAttribute('muid') === mUid;
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
    * */
    deleteItems(target) {
        _.remove(store.state.component.items, function(item) {
            return item.uid === target.getAttribute('uid');
        });
    },
}
