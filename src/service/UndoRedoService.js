import { store } from "@/store";

export default {

    addUndoItem(undoItem){
        window.Vue.$store.commit('addUndoItem', undoItem);
    },

    addRedoItem() {

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
