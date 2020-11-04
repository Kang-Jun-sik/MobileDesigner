import $ from "jquery";
import 'jquery-contextmenu'
import GlobalService from "@/service/GlobalService";
import ControlService from "@/service/ControlService";
import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";
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
                    selector: ".ui-selected",
                    items: {
                        "edit": {name: "SearchOption1", icon: "ic-edit"},
                        "sep1": "---------",
                    },
                    callback: function(itemKey, opt, rootMenu, originalEvent) {
                        console.log(itemKey);
                    }
                    // there's more, have a look at the demos and docs...
                });
                break;

            case "dews-mobile-searchContainer" :
                $.contextMenu({
                    selector: ".ui-selected",
                    items: {
                        "edit": {name: "Search-container-option", icon: "edit"},
                        "delete": {name: "Delete", icon: "delete"},
                        "sep1": "---------",
                    },
                    callback: function(itemKey, opt, rootMenu, originalEvent) {
                        console.log('searchContainer ContextMenu', itemKey, opt);
                        switch (itemKey){
                            case "delete" :
                                ControlService.sendDeleteMessage(opt.$trigger[0]);
                                ControlService.deleteService(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;

            case "dews-mobile-button" :
                $.contextMenu({
                    selector: ".ui-selected",
                    items: {
                        "b1": {name: "ButtonOption1", icon: "edit"},
                        "delete": {name: "Delete", icon: "delete"},
                        "sep1": "---------",
                    },
                    callback: function(itemKey, opt, rootMenu, originalEvent) {
                        console.log(itemKey, opt);
                        switch (itemKey){
                            case "delete" :
                                ControlService.sendDeleteMessage(opt.$trigger[0]);
                                ControlService.deleteService(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;

            case "dews-mobile-areaBox":
                $.contextMenu({
                    selector: ".ui-selected",
                    items: {
                        "vertical": {name: "세로분할", icon: "edit"},
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "vertical":
                                SplitService.verticalSplit(opt.$trigger[0]);
                                break;
                        }
                    }
                })
                break;
        }
    },

    destroyContextMenu(){
        $.contextMenu('destroy');
    }
}

