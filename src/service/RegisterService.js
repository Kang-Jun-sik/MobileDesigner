import GlobalService from "@/service/GlobalService";
import UndoRedoService from "@/service/UndoRedoService";
import PasteService from "@/service/PasteService";
import CreateService from "@/service/CreateService";
import DeleteService from "@/service/DeleteService";
import PageOpenService from "@/service/PageOpenService";
import SelectService from "@/service/SelectService";
import ChangeService from "@/service/ChangeService";

export default {
    init() {
        window.services = new Map();// 글로벌 서비스를 위한 서비스 Map 생성

        window.services.set(PageOpenService.openService.name, PageOpenService.openService); //Page Open(EWP 열기)
        window.services.set(SelectService.selectFromIDE.name, SelectService.selectFromIDE); //Control Selection(컨트롤 선택 from IDE)
        //window.services.set(UndoRedoService.undoredoService.name, UndoRedoService.undoredoService); //Undo & Redo(실행취소&되돌리기) => Create Delete로 변경
        window.services.set(CreateService.createFromIDE.name, CreateService.createFromIDE); //Item Create From IDE (undo/redo)
        window.services.set(DeleteService.deleteFromIDE.name, DeleteService.deleteFromIDE); //Item Delete From IDE (undo/redo)
        window.services.set(PasteService.pasteFromIDE.name, PasteService.pasteFromIDE); //Paste(붙여넣기)
        window.services.set(ChangeService.changeFromIDE.name, ChangeService.changeFromIDE) //Control Change(컨트롤 속성 변경 from IDE)
    }
}
