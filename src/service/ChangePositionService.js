import store from "@/store/index";
import mobileDesignerToIDE from "@/utils/mobileDesignerToIDE";

export default {
    /*
    * 컨트롤 위치 정보 메세지 전달 함수 (Mobile Designer --> IDE)
    * */
    sendChangePositionMessage(component, target) {
        const parent = component.parentElement.closest('.dews-mobile-component')
        const parentUid = parent.getAttribute('uid');
        mobileDesignerToIDE("change_control", component, parentUid);
    },

    /**
     * 컨트롤 위치 정보 메세지 전달 함수 (IDE --> Mobile Designer)
     */
    changePositionServiceFromIDE(args) {
        const obj = JSON.parse(args);
        const idx = obj["index"];
        const parentUid = obj["parentId"];
        const controlUid = obj["uid"];

        const parent = store.state.component.items.find(item => {
            return item.uid === parentUid;
        })
        const control = store.state.component.items.find(item => {
            return item.uid === controlUid;
        })

        document.querySelector(`[uid=${controlUid}]`).remove();
        parent.$el.insertBefore(control.$el, parent.$el.children[idx]);
    }
}
