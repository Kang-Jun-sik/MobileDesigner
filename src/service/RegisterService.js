import GlobalService from "@/service/GlobalService";
import UndoRedoService from "@/service/UndoRedoService";
import PasteService from "@/service/PasteService";

export default {
    init() {
        window.services = new Map();// 글로벌 서비스를 위한 서비스 Map 생성
        window.services.set(GlobalService.openService.name, GlobalService.openService); //Page Open(EWP 열기)
        window.services.set(GlobalService.selectFromIDEService.name, GlobalService.selectFromIDEService); //Control Selection(컨트롤 선택 from IDE)
        window.services.set(UndoRedoService.undoredoAction.name, UndoRedoService.undoredoAction); //Undo & Redo(실행취소&되돌리기)
        window.services.set(PasteService.pasteService.name, PasteService.pasteService); //Paste(붙여넣기)
    }
}
