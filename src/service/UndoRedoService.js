import {store} from "@/store";
import ControlService from "@/service/ControlService";
import UndoRedoService from "@/service/UndoRedoService";

export default {

    addUndoItem(undoItem) {
        window.Vue.$store.commit('addUndoItem', undoItem);
    },

    addRedoItem() {

    },

    undoAction(item){
    /*
     * [undo action] 반대로 동작한다.
     *  case 1) addItem <==> deleteItem
     *  case 2) control property change before <==> control property change after
     */
        /*
        let parent;
        let paretUid;
        switch (item.type){
            case 'addItem' :
                ControlService.sendDeleteMessage(item.data.$el);
                ControlService.deleteControl(item.data.$el);
                break;
            case 'deleteItem' :
                paretUid = item.parentUid;
                parent = window.Vue.$store.state.items.find(item => item.uid === paretUid);
                if(parent){
                    window.Vue.$store.commit('addItem', item.data);
                    parent.$el.appendChild(item.data.$el);
                }
                break;
        }
        */
    },

    /*
     * [redo action]
     * redo stack에 쌓인 대로 동작한다.
     */
    redoAction(item){
        let parent;
        let paretUid;
        switch (item.type){

            case 'addItem' :
                paretUid = item.parentUid;
                parent = window.Vue.$store.state.items.find(item => item.uid === paretUid);
                if(parent){
                    window.Vue.$store.commit('addItem', item.data);
                    parent.$el.appendChild(item.data.$el);
                }
                break;

            case 'deleteItem' :
                ControlService.sendDeleteMessage(item.data.$el);
                ControlService.deleteControl(item.data.$el);
                break;
        }
    },

    //undo 수행
    undoExecute() {
        //가장 Top에 있는 undoItem을 얻어온다.
        let undoItem = window.Vue.$store.state.undoItems.pop();
        if (undoItem) {
            window.Vue.$store.commit('addRedoItem', undoItem); //redo stack에 추가
            UndoRedoService.undoAction(undoItem);
        }
        console.log('undo Service execute');
    },

    //redo 수행
    redoExecute() {
        /*
        let redoItem = window.Vue.$store.state.redoItems.pop();
        if(redoItem){
            window.Vue.$store.commit('addUndoItem', redoItem); //undo stack에 추가
            UndoRedoService.redoAction(redoItem);
        }
        console.log('redo Service execute');
         */
    },

    //undo or redo action from IDE
    undoredoAction(item){
        console.log(item);
        console.log('do undo redo from ide');
    }
}
