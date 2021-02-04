import DeleteService from "@/service/DeleteService";
import CreateService from "@/service/CreateService";
import makeForIDEInfo from "@/utils/makeForIDEInfo";
import MultiCommandService from "@/service/MultiCommandService";
import mobileDesignerToIDE from "@/utils/mobileDesignerToIDE";

export default {
    sendMultiCommand(param) {
        const multiCommand = {
            commandType: 'multi_command',
            messageList: [],
        };

        for (let data of param) {
            if (!data.commandType) return;

            switch (data.commandType) {
                case "create":
                    multiCommand.messageList.push(MultiCommandService.makeCreateMessage(data.obj));
                    break;
                case "delete":
                    multiCommand.messageList.push(MultiCommandService.makeDeleteMessage(data.obj));
                    break;
                case "change_control":
                    multiCommand.messageList.push(MultiCommandService.makeChangeMessage(data.obj));
                    break;
            }
        }

        mobileDesignerToIDE({
            commandType: multiCommand.commandType,
            data: {
                commandList: multiCommand.messageList,
                uniqueId: 'multi_command-service'
            }
        });
    },

    /*
    * Command 공통 함수
    * */
    makeControl(elementUID) {
        const controlIndex = elementUID.lastIndexOf('-');
        return elementUID.substring(0, controlIndex);
    },

    /*
    * MultiCommand Creation Message For SplitService
    * */
    makeCreateMessage(param) {
        const createPreData = CreateService.sendCreateMessage(param, true);
        const elementUID = createPreData.elm ? createPreData.elm.getAttribute('uid') : createPreData.data.uniqueId;
        const control = MultiCommandService.makeControl(elementUID);
        const createControlInfo = document.createElement(control);
        createControlInfo.setAttribute('uid', elementUID);
        makeForIDEInfo.createDataMessage(createControlInfo, createPreData.elm.children, createPreData.elm);

        const XMLWriter = require('xml-writer');
        const xw = new XMLWriter;
        xw.startDocument();
        xw.output = createControlInfo.outerHTML;
        xw.endDocument();

        return {
            'commandType': createPreData.commandType,
            'parentId': createPreData.parentId,
            'data': xw.output,
            'index': createPreData.index
        };
    },

    /*
    * MultiCommand Delete Message For SplitService
    * */
    makeDeleteMessage(param) {
        const deletePreData = DeleteService.sendDeleteMessage(param, true);
        const elementUID = deletePreData.elm ? deletePreData.elm.getAttribute('uid') : deletePreData.data.uniqueId;
        const control = MultiCommandService.makeControl(elementUID);

        const XMLWriter = require('xml-writer');
        const xw = new XMLWriter;
        xw.startDocument();
        xw.startElement(control);
        xw.writeAttribute('uid', elementUID);
        xw.endElement();
        xw.endDocument();

        return {
            'commandType': deletePreData.commandType,
            'parentId': deletePreData.parentId,
            'data': xw.output
        };
    },

    makeChangeMessage(param) {},
}
