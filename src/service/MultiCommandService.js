import DeleteService from "@/service/DeleteService";
import CreateService from "@/service/CreateService";
import makeForIDEInfo from "@/utils/makeForIDEInfo";
import MultiCommandService from "@/service/MultiCommandService";
import mobileDesignerToIDE from "@/utils/mobileDesignerToIDE";

export default {

    sendMultiCommand(param) {
        let multiCommand = {};
        multiCommand.commandType = 'multi_command';
        multiCommand.messageList = [];
        for (let i = 0; i < param.length; i++) {
            if (param[i].commandType === undefined)
                return;
            switch (param[i].commandType) {
                case "create" :
                    multiCommand.messageList.push(MultiCommandService.makeCreateMessage(param[i].obj));
                    break;
                case "delete" :
                    multiCommand.messageList.push(MultiCommandService.makeDeleteMessage(param[i].obj));
                    break;
            }
        }
        let obj = {
            commandType: multiCommand.commandType,
            data: {
                commandList: multiCommand.messageList,
                uniqueId: 'multi_command-service'
            }
        }
        mobileDesignerToIDE(obj);
    },

    //MultiCommand Creation Message For SplitService
    makeCreateMessage(param) {
        let createData;
        let createPreData = CreateService.sendCreateMessage(param, true);
        const XMLWriter = require('xml-writer');
        const xw = new XMLWriter;
        const elementUID = createPreData.elm ? createPreData.elm.getAttribute('uid') : createPreData.data.uniqueId;
        const controlIndex = elementUID.lastIndexOf('-');
        const control = elementUID.substring(0, controlIndex);
        const createControlInfo = document.createElement(control);
        createControlInfo.setAttribute('uid', elementUID);
        makeForIDEInfo.createDataMessage(createControlInfo, createPreData.elm.children, createPreData.elm);
        xw.startDocument();
        xw.output = createControlInfo.outerHTML;
        xw.endDocument();
        createData = {
            'commandType': createPreData.commandType,
            'parentId': createPreData.parentUID,
            'data': xw.output,
            'index': createPreData.idx
        };
        return createData;
    },

    //MultiCommand Delete Message For SplitService
    makeDeleteMessage(param) {
        let deleteData;
        let deletePreData = DeleteService.sendDeleteMessage(param, true);
        const XMLWriter = require('xml-writer');
        const xw = new XMLWriter;
        const elementUID = deletePreData.elm ? deletePreData.elm.getAttribute('uid') : deletePreData.data.uniqueId;
        const controlIndex = elementUID.lastIndexOf('-');
        const control = elementUID.substring(0, controlIndex);
        xw.startDocument();
        xw.startElement(control);
        xw.writeAttribute('uid', elementUID);
        xw.endElement();
        xw.endDocument();
        deleteData = {
            'commandType': deletePreData.commandType,
            'parentId': deletePreData.parentUID,
            'data': xw.output
        };
        return deleteData;
    }
}
