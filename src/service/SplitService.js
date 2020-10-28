import {store} from "@/store";
import GlobalService from "@/service/GlobalService";

export default {
    /*
    * 가로 분할 로직
    * */
    verticalSplit(target) {
        // TabletL 사이즈가 아니라면 분할이 불가능하므로 리턴
        if (store.state.designerLayout !== 'designer-tabletL') return

        let area, newArea;
        const newTarget = this.findTarget(target);
        const parentElement = target.parentElement;
        // 세로 분할 로직
        if (!target.parentElement.classList.contains('dews-item')) {
            // 1. AreaBox/ AreaTabs가 분할되지 않은 경우 (col-12를 다 차지하고 있음)
            area = GlobalService.addComponent('AreaPanel');
            insertElement(area.$el);
            area.$el.querySelectorAll('.dews-item')[0].appendChild(target);
            area.$el.querySelectorAll('.dews-item')[1].style.height = target.offsetHeight + 'px';
            area.$el.querySelectorAll('.dews-item')[1].style.backgroundColor = '#ffffff';
            area.$el.querySelectorAll('.dews-item')[1].style.marginBottom = '12px';

            GlobalService.setPosition(target, target.offsetWidth, target.offsetHeight);
        } else {
            // 2. 이미 분할이 되어있는 경우
        }

        // 원래있던 자리에 삽입되어이야 하기 때문에 findTarget 함수 호출 후 리턴 값으로 삽입
        function insertElement(area){
            switch (newTarget.type) {
                case "parentInsert":
                    parentElement.appendChild(area);
                    break;
                case "beforeInsert":
                    parentElement.insertBefore(area, newTarget.element);
                    break;
                case "null":
                    parentElement.insertBefore(area, newTarget.null);
                    break;
            }
        }
    },

    /*
    * 가로 분할 로직
    * */
    horizontalSplit(target) {
        // TabletL 사이즈가 아니라면 분할이 불가능하므로 리턴
        if (store.state.designerLayout !== 'designer-tabletL') return
    },

    /*
    * target의 위치를 찾기 위한 로직
    * */
    findTarget(target) {
        let infoTarget;

        if (target.parentElement.childElementCount === 1) {
            infoTarget = {
                type: 'parentInsert',
                element: target.parentElement
            }
        } else if (target.parentElement.childElementCount > 1) {
            if (target.nextSibling) {
                infoTarget = {
                    type: 'beforeInsert',
                    element: target.nextSibling
                }
            } else {
                infoTarget = {
                    type: 'null'
                }
            }
        }
        return infoTarget;
    }
}
