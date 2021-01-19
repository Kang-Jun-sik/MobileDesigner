import mobileDesignerToIDE from "@/utils/mobileDesignerToIDE";

export default {
    /*
    * 컨트롤 위치 정보 메세지 전달 함수 (Mobile Designer --> IDE)
    **/
    sendChangePositionMessage(component, target) {
        const parent = component.parentElement.closest('.dews-mobile-component')
        const parentUid = parent.getAttribute('uid');
        mobileDesignerToIDE("change_control", component, parentUid);
    }
}
