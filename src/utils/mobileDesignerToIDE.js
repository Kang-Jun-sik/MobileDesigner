import makeForIDEInfo from "@/utils/makeForIDEInfo";

const mobileDesignerToIDE = (message) => {
    const XMLWriter = require('xml-writer');
    const xw = new XMLWriter;
    const elementUID = message.elm ? message.elm.getAttribute('uid') : message.data.uniqueId;
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
            obj = makeForIDEInfo.createPositionInfo(message.elm);
            break;
        case "change": //Change Control Attribute
            obj = {
                commandType: "change",
                AttributeKey: message.data.AttributeKey,
                AttributeValue: message.data.AttributeValue,
                uniqueId: message.data.uniqueId
            }
            break;
        case "multi_command":
            obj = {
                commandType: message.commandType,
                data: message.data.commandList
            }
            break;
    }
    console.log(obj);
    // eslint-disable-next-line no-undef
    chromiumObject.mobileDesignerToIDE(obj); //실제 IDE 데이터 전송 로직
};


export default mobileDesignerToIDE;
