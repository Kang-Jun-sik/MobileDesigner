import store from "@/store/index"
import SplitService from "@/service/SplitService";
import ResizeService from "@/service/ResizeService";
import ControlService from "@/service/ControlService";
import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";

export default {
    //To do - 부모 아이디 찾는 로직 함수화 (부모 uid 리턴할것)
    verticalSplit(target) {
        // TabletL 사이즈가 아니라면 분할이 불가능하므로 리턴
        if (store.state.layout.designerLayout !== 'designer-tabletL') return;

        if (!target.classList.contains('dews-item')
            && !target.parentElement.classList.contains('dews-item')) {
            SplitService.setSplit(target)
        } else {
            if (target.classList.contains('dews-item')) {
                SplitService.itemSplit(target);
            } else {
                SplitService.areaSplit(target)
            }
        }
    },

    /*
    * AreaBox/ AreaTabs 분할 할 경우
    * AreaPanel 생성 후, 2개의 AreaItem을 생성하여 분할한다.
    * */
    setSplit(target) {
        // 분할을 통해 target이 재배치되기 때문에 삭제를 위해 sendDeleteMessage 호출
        ControlService.sendDeleteMessage(target);

        // 분할을 위한 AreaPanel extend 후, target과 area.$el를 replaceWith 실행
        const areaPanel = ControlService.addComponent('AreaPanel');
        store.commit('addItem', areaPanel);
        const areaPanelElement = areaPanel.$el;
        target.replaceWith(areaPanelElement);

        // 분할하며 생성된 AreaPanel 부모 노드 찾기
        const panelParent = areaPanelElement.parentElement.closest('.dews-mobile-component');
        const panelParentUid = panelParent.getAttribute('uid');
        mobileDesignerToIDE("create", areaPanelElement, panelParentUid);

        for (let i = 0; i < 2; i++) {
            let item = ControlService.addComponent('AreaItem');
            areaPanelElement.appendChild(item.$el);
            store.commit('addItem', item);

            const parentElement = item.$el.parentElement.closest('.dews-mobile-component');
            const parentUid = parentElement.getAttribute('uid');
            mobileDesignerToIDE("create", item.$el, parentUid);
        }

        // 왼쪽 item에 target(box 혹은 tabs) appendChild (default)
        const areaItem = areaPanelElement.querySelectorAll(':scope > .dews-item')[0];
        areaItem.appendChild(target);
        mobileDesignerToIDE("create", target, areaItem.getAttribute('uid'));
        ResizeService.setPosition(target);
    },

    /*
    * target => dews-item (이미 분할이 되어있는 경우)
    * 하나의 AreaPanel 최대 3개까지 분할 가능 4:4:4
    * */
    itemSplit(target) {
        // target(item)이 존재하는 AreaPanel안에 또다른 AreaPanel(AreaPanel 2개)이 존재한다면 이미 분할된 상태이므로 return
        // target(item)이 존재하는 AreaPanel에는 최대 3개(4:4:4)의 item이 들어갈 수 있으므로 2개가 아니면 return
        if (SplitService.childPanelCount(target.parentElement) >= 2
            || SplitService.parentPanelCount(target) >= 2
            || target.parentElement.childElementCount !== 2) return

        const parentElement = target.parentElement;
        const addItem = ControlService.addComponent('AreaItem');
        parentElement.appendChild(addItem.$el);
        store.commit('addItem', addItem);

        const childElement = Array.from(parentElement.children);
        childElement.forEach(child => {
            let splitItem = store.state.component.items.find(item => {
                return item.uid === child.getAttribute('uid');
            })
            splitItem.col = 'col-fd-4';
        });
    },

    /*
    * target => dews-box / dews-tabs (이 두가지가 이미 분할된 item 속에 들어있을 경우)
    * 1Row 당 최대 3개까지 분할 가능
    * 분할 가능 비율 (4:8 / 8:4)로 변경 후, 재분할 진행(비율은 6:6 고정)
    * */
    areaSplit(target) {
        // target(box, tabs)이 존재하는 AreaPanel이 2개 이상이라면 이미 3개가 분할된 상태이므로 return
        // target(box, tabs)이 존재하는 AreaItem의 SiblingItem이 이미 분활된 상태(AreaPanel 2개)라면 return
        // target(box, tabs)이 존재하는 AreaPanel에 이미 item이 3개(4:4:4)가 존재한다면 return
        if (SplitService.parentPanelCount(target) >= 2
            || SplitService.childPanelCount(target.closest('.dews-panel')) >= 2
            || target.closest('.dews-panel').childElementCount === 3) return

        // 1) 분할 비율을 4:8 또는 8:4로 변경
        const targetParentItem = target.parentElement;
        const parentSiblingItem = targetParentItem.nextSibling ? targetParentItem.nextSibling : targetParentItem.previousSibling;

        store.state.component.items.forEach(item => {
            if (item.uid === targetParentItem.getAttribute('uid')) {
                item.col = 'col-fd-8';
            } else if (item.uid === parentSiblingItem.getAttribute('uid')) {
                item.col = 'col-fd-4';
            }
        });

        // 2) AreaPanel + AreaItem 2개 추가
        SplitService.setSplit(target);
    },

    /*
    * 재분할 전, AreaPanel을 Count하여 하나만 있다면 재분할 가능 (그 이상 재분할 불가능)
    * */
    parentPanelCount(element) {
        let _element = element;
        let cnt = 0;
        while (!_element.classList.contains('main-designer')) {
            if (_element.parentElement.classList.contains('dews-panel')) {
                cnt += 1
            }
            _element = _element.parentElement;
        }

        return cnt
    },

    /*
    * 재분할 전, AreaPanel을 Count하여 하나만 있다면 재분할 가능 (그 이상 재분할 불가능)
    * */
    childPanelCount(element) {
        let cnt = 1;
        Array.from(element.children).forEach(el => {
            const elementInPanel = Array.from(el.children).filter(child => {
                return child.classList.contains('dews-panel')
            })
            if (elementInPanel.length > 0) cnt += 1;
        })

        return cnt;
    }
}
