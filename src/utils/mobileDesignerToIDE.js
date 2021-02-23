import makeForIDEInfo from "@/utils/makeForIDEInfo";

const mobileDesignerToIDE = (message) => {
    const XMLWriter = require('xml-writer');
    const xw = new XMLWriter;
    const elementUID = message.elm ? message.elm.getAttribute('uid') : message.uniqueId;
    const controlIndex = elementUID.lastIndexOf('-');
    const control = elementUID.substring(0, controlIndex);

    if (message.commandType === 'create') {
        const createControlInfo = document.createElement(control);
        createControlInfo.setAttribute('uid', elementUID);
        makeForIDEInfo.createDataMessage(createControlInfo, message.elm.children, message.elm);
        xw.startDocument();
        xw.output = createControlInfo.outerHTML;
        xw.endDocument();
    } else {
        xw.startDocument();
        xw.startElement(control);
        xw.writeAttribute('uid', elementUID);
        xw.endElement();
        xw.endDocument();
    }

    let obj = {};
    switch (message.commandType) {
        case "create":
            obj = {
                commandType: message.commandType,
                parentId: message.parentId,
                data: xw.output,
                index: message.index
            }
            break;
        case "delete":
            obj = {
                commandType: message.commandType,
                parentId: message.parentId,
                data: xw.output
            }
            break;
        case "select":
            obj = {
                commandType: message.commandType,
                data: xw.output
            }
            break;
        case "change_control" : //Control Position
            obj = {
                commandType: "change_control",
                uid: message.uniqueId,
                parentId: message.parentId,
                index: message.index
            }
            break;
        case "change": //Change Control Attribute
            obj = {
                commandType: "change",
                AttributeKey: message.AttributeKey,
                AttributeValue: message.AttributeValue,
                uniqueId: message.uniqueId
            }
            break;
        case "multi_command":
            obj = {
                commandType: message.commandType,
                data: message.commandList
            }
            break;
        case "set_dataSource":
            obj = {
                commandType: "set_dataSource",
                datasourceUid : message.matchingInfo.datasourceUid,
                targetUid : message.matchingInfo.targetUid
            }
            break;
    }
    console.log(obj);
    // eslint-disable-next-line no-undef
    // chromiumObject.mobileDesignerToIDE(obj); //실제 IDE 데이터 전송 로직
};


export default mobileDesignerToIDE;
