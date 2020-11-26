import store from "@/store/index"
import ResizeService from "@/service/ResizeService";
import ControlService from "@/service/ControlService";

export default {
    /*
    * 세로 분할 로직
    **/
    verticalSplit(target) {
        // TabletL 사이즈가 아니라면 분할이 불가능하므로 리턴
        if (store.state.layout.designerLayout !== 'designer-tabletL') return;

        let area, areaElement;
        if (!target.parentElement.classList.contains('dews-item')) {
            // 1. AreaBox/ AreaTabs가 분할되지 않은 경우 (col-12를 다 차지하고 있음)

            // 분할을 위한 AreaPanel extend 후, target과 area.$el를 replaceWith 실행
            area = ControlService.addComponent('AreaPanel');
            areaElement = area.$el;
            target.replaceWith(areaElement);

            // 초기 세로 분할의 경우 item이 2개 필요하기 때문에 for문 사용
            for (let i = 0; i < 2; i++) {
                let item = ControlService.addComponent('AreaItem');
                areaElement.appendChild(item.$el);
                store.commit('addItem', item);
            }

            // 왼쪽 item에 target(box 혹은 tabs) appendChild (default)
            areaElement.querySelectorAll(':scope > .dews-item')[0].appendChild(target);
            ResizeService.setPosition(target);
        } else {
            // 2. 이미 분할이 되어있는 경우
        }
    }
}
