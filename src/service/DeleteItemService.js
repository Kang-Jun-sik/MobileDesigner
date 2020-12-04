import store from "@/store/index";
import ControlService from "@/service/ControlService";
import UndoRedoService from "@/service/UndoRedoService";

export default {
    deleteItemService(args) {
        console.log('delete Item from IDE');
        let obj = JSON.parse(args);
        //(1) ID 추출
        let delItemUid = obj['controlUniqueId'];
        if (delItemUid) {
            let control = window.Vue.$store.state.component.items.find(item => item.uid === delItemUid);
            ControlService.deleteControl(control.$el);
        }
    }
}
