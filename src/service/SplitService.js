import {store} from "@/store";
import GlobalService from "@/service/GlobalService";
import ControlService from "@/service/ControlService";
import $ from "jquery";

export default {
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
            target.replaceWith(areaElement);

            // 초기 세로 분할의 경우 item이 2개 필요하기 때문에 for문 사용
            for (let i = 0; i < 2; i++) {
                let item = ControlService.addComponent('AreaItem');
                areaElement.appendChild(item.$el);
            }

            // 왼쪽 item에 target(box 혹은 tabs) appendChild (default)
            areaElement.querySelectorAll('.dews-item')[0].appendChild(target);
            // target(box 혹은 tabs)이 들어가지 않은 또 다른 item이 생성되었다는 표시를 위하여 style 추가 (수정필요)
            areaElement.querySelectorAll('.dews-item')[1].style.height = target.offsetHeight + 'px';
            areaElement.querySelectorAll('.dews-item')[1].style.backgroundColor = '#ffffff';
            areaElement.querySelectorAll('.dews-item')[1].style.marginBottom = '12px';

            GlobalService.setPosition(target, target.offsetWidth, target.offsetHeight);
        } else {
            // 2. 이미 분할이 되어있는 경우
        }
    },

    /*
    * 가로 분할 로직
    * */
    horizontalSplit(target) {
        // TabletL 사이즈가 아니라면 분할이 불가능하므로 리턴
        if (store.state.designerLayout !== 'designer-tabletL') return;

        // AreaBox/ AreaTabs의 부모가 AreaItem일 때만 가로 분할 가능
        let area, areaElement;
        if (target.parentElement.classList.contains('dews-item')) {
            area = ControlService.addComponent('AreaPanel');
            areaElement = area.$el;
            target.replaceWith(areaElement)
            let areaItem = ControlService.addComponent('AreaItem');
            areaElement.appendChild(areaItem.$el);
            areaItem.$el.appendChild(target);

            let splitArea = ControlService.addComponent('AreaPanel');
            let splitItem = ControlService.addComponent('AreaItem');
            splitArea.$el.appendChild(splitItem.$el);
            splitItem.$el.style.height = (parseInt(target.querySelector('.dews-box-content-wrap').style.height, 10) / 2) + 'px'
            splitItem.$el.style.backgroundColor = '#ffffff';

            areaElement.parentElement.appendChild(splitArea.$el);
        }
    },
}
