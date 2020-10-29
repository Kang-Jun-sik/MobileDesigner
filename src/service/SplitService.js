import {store} from "@/store";
import GlobalService from "@/service/GlobalService";

export default {
    /*
    * 세로 분할 로직
    * */
    verticalSplit(target) {
        // TabletL 사이즈가 아니라면 분할이 불가능하므로 리턴
        if (store.state.designerLayout !== 'designer-tabletL') return

        let area;
        if (!target.parentElement.classList.contains('dews-item')) {
            // 1. AreaBox/ AreaTabs가 분할되지 않은 경우 (col-12를 다 차지하고 있음)
            area = GlobalService.addComponent('AreaPanel');
            target.replaceWith(area.$el);
            area.$el.querySelectorAll('.dews-item')[0].appendChild(target);
            area.$el.querySelectorAll('.dews-item')[1].style.height = target.offsetHeight + 'px';
            area.$el.querySelectorAll('.dews-item')[1].style.backgroundColor = '#ffffff';
            area.$el.querySelectorAll('.dews-item')[1].style.marginBottom = '12px';

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
        if (store.state.designerLayout !== 'designer-tabletL') return
    },
}
