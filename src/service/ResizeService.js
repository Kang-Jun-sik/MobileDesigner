import $ from "jquery";
import ResizeService from "@/service/ResizeService";

export default {
    /*
    * 컨트롤 리사이즈 (jQuery 라이브러리 사용)
    * */
    canResize(element) {
        //메인 디자이너의 경우 리사이즈 핸들러가 필요없음
        if(element.classList.contains('main-designer'))
            return;

        const elementUid = element.getAttribute('uid');
        const target = $(`[uid=${elementUid}]`);
        $(target).resizable({
            disabled: false,
            alsoResize: ResizeService.alsoResizeTarget(target),
            handles: 'n, e, s, w, ne, se, sw, nw',
            delay: 0,
            minWidth: parseInt(target.css('minWidth'), 10),
            minHeight: parseInt(target.css('minHeight'), 10),
            maxWidth: parseInt(target.css('maxWidth'), 10),
            resize: function (e, ui) {
                e.stopPropagation();
                let dir = ui.element.data('ui-resizable').axis;
                if (!['s', 'e'].includes(dir)) {
                    // 수정 필요
                    ui.position.left = ui.originalPosition.left;
                    ui.position.top = ui.originalPosition.top;
                    ui.size.width = ui.originalSize.width;
                    ui.size.height = ui.originalSize.height;
                }
                let width = ui.size.width;
                let height = ui.size.height;
                ResizeService.setPosition(element, width, height);
            },
            start: function (e, ui) {
                e.stopPropagation();
            },
            stop: function (e, ui) {
                e.stopPropagation();
            },
            create: function (e, ui) {
                let width = $(e.target).width();
                let height = $(e.target).height();
                ResizeService.setPosition(element, width, height);
            },
        });
        ResizeService.setPosition(element, element.offsetWidth, element.offsetHeight);
    },

    /*
    * Layout 변경 및 Box collapsed를 위한 resize handler 위치 css 수정
    * */
    setPosition(el, width, height) {
        width = el.offsetWidth;
        height = el.offsetHeight;
        $('.ui-resizable-n').css('left', (width / 2 - 4) + 'px');
        $('.ui-resizable-e').css('top', (height / 2 - 4) + 'px');
        $('.ui-resizable-s').css('left', (width / 2 - 4) + 'px');
        $('.ui-resizable-w').css('top', (height / 2 - 4) + 'px');
    },

    /**
     * 하위 자식 컨트롤의 사이즈 조절을 위한 로직 ex) dews-mobile-areBox > dews-box-content-wrap
     * */
    alsoResizeTarget(target) {
        if(target === null)
            return;

        if(target[0].classList.contains('dews-mobile-areaBox')){
            return target.find('.dews-box-content-wrap');
        }
    },

    /*
    * Select된 Control의 ResizeHandler 제거
    * */
    removeResizeHandler(){
        const resizeHandler = document.querySelectorAll('.ui-resizable-handle');
        Array.prototype.forEach.call(resizeHandler, function(handler) {
            handler.parentNode.removeChild(handler);
        });
    },

    /*
    * Resizable Event 제거
    * */
    destoryResizable(item){
        const elementUid = item.getAttribute('uid');
        const target = $(`[uid=${elementUid}]`);
        let isDesigner = item.classList.contains('main-designer');

        if(target && !isDesigner) $(target).resizable('destroy');
    },
}
