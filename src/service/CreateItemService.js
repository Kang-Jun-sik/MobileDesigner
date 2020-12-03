import ControlService from "@/service/ControlService";
import UndoRedoService from "@/service/UndoRedoService";
import GlobalService from "@/service/GlobalService";

export default {
    createItemService(args){
        console.log('create Item from IDE');
        let obj = JSON.parse(args);
        let parser = new DOMParser();
        const parentuid = obj['controlUniqueId'];
        let xmlDoc = parser.parseFromString(obj["controlAttributeValue"], "application/xml");
        GlobalService.PageParsing(xmlDoc.firstElementChild, parentuid);
    }
}
