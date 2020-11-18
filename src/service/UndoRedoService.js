import { store } from "@/store";

export default {

    //undo stack에 쌓기
    addUndoRedoItem(){

    },

    //undo 수행
    undoExecute(){
        console.log('undo Service execute');
    },

    //redo 수행
    redoExecute(){
        console.log('redo Service execute');
    }
}
