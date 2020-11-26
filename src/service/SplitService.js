import { store } from "@/store";
import ResizeService from "@/service/ResizeService";
import ControlService from "@/service/ControlService";
import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";

export default {
    //To do - 부모 아이디 찾는 로직 함수화 (부모 uid 리턴할것)
    /*
    * 세로 분할 로직
    **/
    verticalSplit(target) {
        // TabletL 사이즈가 아니라면 분할이 불가능하므로 리턴
        if (store.state.designerLayout !== 'designer-tabletL') return;

        let area, areaElement;
        if (!target.parentElement.classList.contains('dews-item')) {
            // 1. AreaBox/ AreaTabs가 분할되지 않은 경우 (col-12를 다 차지하고 있음)

            // 분할을 위한 AreaPanel extend 후, target과 area.$el를 replaceWith 실행
            area = ControlService.addComponent('AreaPanel');
            areaElement = area.$el;

            const targetParentNode = target.closest('.dews-mobile-component');
            const targetParentUid = targetParentNode.getAttribute('uid');
            mobileDesignerToIDE("delete", target, targetParentUid); //IDE에서는 삭제
            target.replaceWith(areaElement);


            // 부모 노드 찾기
            const parentNode = areaElement.parentElement.closest('.dews-mobile-component');
            const parentUid = parentNode.getAttribute('uid');
            mobileDesignerToIDE("create",areaElement,parentUid);

            // 초기 세로 분할의 경우 item이 2개 필요하기 때문에 for문 사용
            for (let i = 0; i < 2; i++) {
                let item = ControlService.addComponent('AreaItem');
                areaElement.appendChild(item.$el);
                store.commit('addItem', item);

                const parentNode = item.$el.parentElement.closest('.dews-mobile-component');
                const parentUid = parentNode.getAttribute('uid');
                mobileDesignerToIDE("create", item.$el, parentUid);
            }

            // 왼쪽 item에 target(box 혹은 tabs) appendChild (default)
            let boxtarget = areaElement.querySelectorAll('.dews-item')[0];
            boxtarget.appendChild(target);
            //areaElement.querySelectorAll('.dews-item')[0].appendChild(target);
            mobileDesignerToIDE("create", target, boxtarget.getAttribute('uid'));
            ResizeService.setPosition(target, target.offsetWidth, target.offsetHeight);
        } else {
            // 2. 이미 분할이 되어있는 경우
        }
    }
}
