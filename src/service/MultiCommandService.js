import DeleteService from "@/service/DeleteService";
import CreateService from "@/service/CreateService";
import makeForIDEInfo from "@/utils/makeForIDEInfo";
import MultiCommandService from "@/service/MultiCommandService";
import ChangePositionService from "@/service/ChangePositionService";
import mobileDesignerToIDE from "@/utils/mobileDesignerToIDE";
import ChangeService from "@/service/ChangeService";

export default {
    sendMultiCommand(param) {
        const multiCommand = {
            commandType: 'multi_command',
            messageList: [],
        };

        for (let data of param) {
            if (!data.commandType) return;

            multiCommand.messageList.push(MultiCommandService.multiCommandMessage(data));
        }

        mobileDesignerToIDE({
            commandType: multiCommand.commandType,
            commandList: multiCommand.messageList,
            uniqueId: 'multi_command-service'
        });
    },

    multiCommandMessage(data) {
        let previousData, obj;
        switch (data.commandType) {
            case "create":
                previousData = CreateService.multiCreateMessage(data.obj);
                break;
            case "delete":
                previousData = DeleteService.multiDeleteMessage(data.obj);
                break;
            case "change_control":
                previousData = ChangePositionService.multiChangePositionMessage(data.obj, data.parentUid);
                break;
            case "change":
                previousData = ChangeService.multiChangeMessage(data.obj);
                break;
        }

        const uid = previousData.elm ? previousData.elm.getAttribute('uid') : previousData.uniqueId;
        const controlName = uid.substring(0, uid.lastIndexOf('-'));
        const XMLWriter = require('xml-writer');
        const xw = new XMLWriter;

        if (data.commandType === "create") {
            const controlElement = document.createElement(controlName);
            controlElement.setAttribute('uid', uid);
            makeForIDEInfo.createDataMessage(controlElement, previousData.elm.children, previousData.elm);

            xw.startDocument();
            xw.output = controlElement.outerHTML;
            xw.endDocument();
            obj = {
                commandType: previousData.commandType,
                parentId: previousData.parentId,
                data: xw.output,
                index: previousData.index
            }
        } else {
            xw.startDocument();
            xw.startElement(controlName);
            xw.writeAttribute('uid', uid);
            xw.endElement();
            xw.endDocument();

            if (data.commandType === "delete") {
                obj = {
                    commandType: previousData.commandType,
                    parentId: previousData.parentId,
                    data: xw.output
                }
            } else if (data.commandType === "change_control") {
                obj = {
                    commandType: previousData.commandType,
                    uid: previousData.uniqueId,
                    parentId: previousData.parentId,
                    index: previousData.index
                }
            } else if (data.commandType === "change") {
                obj = {
                    commandType: previousData.commandType,
                    AttributeKey: previousData.AttributeKey,
                    AttributeValue: previousData.AttributeValue,
                    uniqueId: previousData.uniqueId
                }
            }
        }

        return obj;
    },
}
