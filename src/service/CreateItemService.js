import GlobalService from "@/service/GlobalService";

export default {
    createItemService(args){
        console.log('create Item from IDE');
        const obj = JSON.parse(args);
        const parser = new DOMParser();
        const parentUid = obj['controlUniqueId'];
        let xmlDoc = parser.parseFromString(obj["controlAttributeValue"], "application/xml");
        GlobalService.pageParsing(xmlDoc.firstElementChild, parentUid);
    }
}
