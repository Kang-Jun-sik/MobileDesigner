import {store} from "@/store";
import GlobalService from "@/service/GlobalService";
import ControlService from "@/service/ControlService";

export default {
    /*
    * 세로 분할 로직
    **/
    verticalSplit(target) {
        // TabletL 사이즈가 아니라면 분할이 불가능하므로 리턴
        if (store.state.designerLayout !== 'designer-tabletL')
            return;

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
        if (store.state.designerLayout !== 'designer-tabletL')
            return;
        let splitParent = target.closest('.dews-item');
        let cloneTarget = target.cloneNode();

        let assignHeight = (target.offsetHeight/2);
        let assignWidth = target.offsetWidth;

        for (let i = 0; i < 2; i++) {
            let newPanel = ControlService.addComponent('AreaPanel');
            let item = ControlService.addComponent('AreaItem');
            let newPanelEl = newPanel.$el;
            let itemEl = item.$el;

            itemEl.style.height = assignHeight + 'px';
            itemEl.style.backgroundColor = '#ffffff';

            newPanelEl.style.height = assignHeight + 'px';
            newPanelEl.style.backgroundColor = '#ffffff';

            if (i == 0) {
                //기존 노드
                itemEl.appendChild(cloneTarget);
                newPanelEl.appendChild(itemEl);
                target.replaceWith(newPanelEl);

            } else if (i == 1) {
                //스플릿 영역
                newPanelEl.style.marginTop = '12px';
                newPanelEl.appendChild(itemEl);
                splitParent.appendChild(newPanelEl);
            }
        }
        console.log(target);
    },
}
