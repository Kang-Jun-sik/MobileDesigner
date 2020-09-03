// import * as findNode from './findNode';

/**
 * 디자이너와 IDE 간의 데이터 통신
 * IDE에서 디자이너로 메타데이터 전송(xml형태)
 */
(function () {
    let wdtd = window.wdtd || {};

    function SendToDesigner(args) {
        console.log(args);
        window.openService();
    }

    wdtd.SendToDesigner = SendToDesigner;
    window.wdtd = wdtd;
}());
