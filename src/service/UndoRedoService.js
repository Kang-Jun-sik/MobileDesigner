import store from "@/store/index";
import DeleteService from "@/service/DeleteService";
import UndoRedoService from "@/service/UndoRedoService";

export default {
    addUndoItem(undoItem) {
        store.commit('addUndoItem', undoItem);
    },

    addRedoItem() {

    },

    /*
     * [undo action] 반대로 동작한다.
     *  case 1) addItem <==> deleteItem
     *  case 2) control property change before <==> control property change after
     */
    undoAction(item){
        /*
        let parent;
        let parentUid;
        switch (item.type){
            case 'addItem' :
                DeleteService.sendDeleteMessage(item.data.$el);
                DeleteService.deleteControl(item.data.$el);
                break;
            case 'deleteItem' :
                parentUid = item.parentUid;
                parent = store.state.component.items.find(item => item.uid === parentUid);
                if (parent){
                    store.commit('addItem', item.data);
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
        let parentUid;

        switch (item.type){
            case 'addItem' :
                parentUid = item.parentUid;
                parent = store.state.component.items.find(item => item.uid === parentUid);
                if (parent){
                    store.commit('addItem', item.data);
                    parent.$el.appendChild(item.data.$el);
                }
                break;

            case 'deleteItem' :
                DeleteService.sendDeleteMessage(item.data.$el);
                DeleteService.deleteControl(item.data.$el);
                break;
        }
    },

    //undo 수행
    undoExecute() {
        //가장 Top에 있는 undoItem을 얻어온다.
        let undoItem = store.state.component.undoItems.pop();
        if (undoItem){
            store.commit('addRedoItem', undoItem); //redo stack에 추가
            UndoRedoService.undoAction(undoItem);
        }
        console.log('undo Service execute');
    },

    //redo 수행
    redoExecute() {
        /*
        let redoItem = store.state.component.redoItems.pop();
        if(redoItem){
            store.commit('addUndoItem', redoItem); //undo stack에 추가
            UndoRedoService.redoAction(redoItem);
        }
        console.log('redo Service execute');
         */
    },

    //undo or redo action from IDE
    undoredoService(item){
        console.log(item);
        console.log('do undo redo from ide');
    }
}
