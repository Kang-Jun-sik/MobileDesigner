import $ from "jquery";
import store from "@/store/index";
import ResizeService from "@/service/ResizeService";

export default {
    /*
    * 컨트롤 리사이즈 (jQuery 라이브러리 사용)
    * */
    // canResize(element) {
    //     //메인 디자이너의 경우 리사이즈 핸들러가 필요없음
    //     if(element.classList.contains('main-designer')) return
    //
    //     const elementHandles = store.state.service.handles[element.classList[0]] ?
    //         store.state.service.handles[element.classList[0]] : "";
    //     const elementUid = element.getAttribute('uid');
    //     const target = $(`[uid=${elementUid}]`);
    //     $(target).resizable({
    //         disabled: false,
    //         alsoResize: ResizeService.alsoResizeTarget(target),
    //         handles: elementHandles,
    //         minWidth: parseInt(target.css('minWidth'), 10),
    //         minHeight: parseInt(target.css('minHeight'), 10),
    //         maxWidth: parseInt(target.css('maxWidth'), 10),
    //         resize: function (e, ui) {
    //             e.stopPropagation();
    //             let dir = ui.element.data('ui-resizable').axis;
    //             SelectService.setPosition(element);
    //         },
    //         start: function (e, ui) {
    //             e.stopPropagation();
    //         },
    //         stop: function (e, ui) {
    //             e.stopPropagation();
    //         },
    //         create: function (e, ui) {
    //             e.stopPropagation();
    //         },
    //     });
    //     SelectService.setPosition(element, element.offsetWidth, element.offsetHeight);
    // },


    /**
     * 하위 자식 컨트롤의 사이즈 조절을 위한 로직 ex) dews-mobile-areBox > dews-box-content-wrap
     * */
    alsoResizeTarget(target) {
        if (target === null) return;

        if (target[0].classList.contains('dews-mobile-box')) {
            return target.find('.dews-box-content-wrap');
        }
    },

    /*
    * Select된 Control의 ResizeHandler 제거
    * */
    removeResizeHandler(){
        const resizeHandler = document.querySelectorAll('.ui-resizable-handle');
        Array.from(resizeHandler).forEach(handler => handler.remove());
    },

    /*
    * Resizable Event 제거
    * */
    destoryResizable(item){
        const elementUid = item.getAttribute('uid');
        const target = $(`[uid=${elementUid}]`);
        const mainDesigner = item.classList.contains('main-designer');

        if (target && !mainDesigner) {
            $(target).resizable('destroy');
        }
    },
}
