import makeForIDEInfo from "@/utils/makeForIDEInfo";

const mobileDesignerToIDE = (commandType, elm, parentUID, key) => {
    const XMLWriter = require('xml-writer');
    const xw = new XMLWriter;
    const elementUid = elm.getAttribute('uid');
    const controlIndex = elementUid.lastIndexOf('-');
    const control = elementUid.substring(0, controlIndex);
    let obj = {};

    if (commandType === 'create') {
        const createControlInfo = document.createElement(control);
        createControlInfo.setAttribute('uid', elementUid);
        makeForIDEInfo.createDataMessage(createControlInfo, elm.children, elm);
        xw.startDocument();
        xw.output = createControlInfo.outerHTML;
        xw.endDocument();

    } else {
        xw.startDocument();
        xw.startElement(control);
        xw.writeAttribute('uid', elementUid);
        xw.endElement();
        xw.endDocument();
    }

    switch (commandType) {
        case "select" :
            obj = {
                'commandType': commandType,
                'data': xw.output
            }
            break;
        case "create":
            obj = {
                'commandType': commandType,
                'parentId': parentUID,
                'data': xw.output
            }
            break;
        case "delete":
            obj = {
                'commandType': commandType,
                'parentId': parentUID,
                'data': xw.output
            }
            break;
    }
    console.log(obj);

    // eslint-disable-next-line no-undef
    chromiumObject.mobileDesignerToIDE(obj); //실제 IDE 데이터 전송 로직
};


export default mobileDesignerToIDE;
