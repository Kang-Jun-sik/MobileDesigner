import $ from "jquery";
import 'jquery-contextmenu'
import DeleteService from "@/service/DeleteService";
import SplitService from "@/service/SplitService";

export default {
    /*
    * 마우스 오른쪽 클릭
    * ContextMenu 호출
    * */
    getContextMenu(instance) {
        switch (instance.classList[0]) {
            case "main-designer" :
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "edit": {name: "mainDesignerOption", icon: "ic-edit"},
                        "sep1": "---------",
                    },
                    callback: function(itemKey, opt) {
                        console.log(itemKey);
                    }
                });
                break;

            case "dews-mobile-item":
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "vertical": {name: "세로분할", icon: "edit"},
                        "delete": {name: "Delete", icon: "delete"}
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "vertical":
                                SplitService.verticalSplit(opt.$trigger[0]);
                                break;
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                })
                break;

            case "dews-mobile-box":
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "vertical": {name: "세로분할", icon: "ic-split"},
                        "delete": {name: "Delete", icon: "ic-delete"}
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "vertical":
                                SplitService.verticalSplit(opt.$trigger[0]);
                                break;
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-tabs':
                break;
            case 'dews-mobile-tab':
                break;
            case 'dews-mobile-searchContainer':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "edit": {name: "Option", icon: "edit"},
                        "delete": {name: "Delete", icon: "delete"},
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-listContainer':
                break;
            case 'dews-mobile-formContainer':
                break;
            case 'dews-mobile-infoContainer':
                break;
            case 'dews-mobile-formSection':
                break;
            case 'dews-mobile-containerContent':
                break;
            case 'dews-mobile-containerButton':
                break;
            case 'dews-mobile-button':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {name: "Delete", icon: "delete"},
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-buttonGroup':
                break;
            case 'dews-mobile-checkbox':
                break;
            case 'dews-checkbox-group':
                break;
            case 'dews-mobile-complex':
                break;
            case 'dews-mobile-datePicker':
                break;
            case 'dews-mobile-maskbox':
                break;
            case 'dews-mobile-monthPicker':
                break;
            case 'dews-mobile-numeric':
                break;
            case 'dews-mobile-periodPicker':
                break;
            case 'dews-mobile-radiobutton':
                break;
            case 'dews-mobile-radioGroup':
                break;
            case 'dews-mobile-textbox':
                break;
            case 'dews-mobile-timePicker':
                break;
            case 'dews-mobile-dropdownList':
                break;
            case 'dews-dropdownbuttondews-mobile-dropdownButton':
                break;
            case 'button-list-child':
                break;
        }
    },

    destroyContextMenu(){
        $.contextMenu('destroy');
    }
}

