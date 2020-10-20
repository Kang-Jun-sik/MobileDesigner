import $ from "jquery";
import 'jquery-contextmenu'
import GlobalService from "@/service/GlobalService";
import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";

export default {
    getContextMenu(instance) {
        switch (instance.classList[0]) {
            case "main-designer" :
                $.contextMenu({
                    // define which elements trigger this menu
                    selector: ".ui-selected",
                    // define the elements of the menu
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
                    // define which elements trigger this menu
                    selector: ".ui-selected",
                    // define the elements of the menu
                    items: {
                        "split": {name: "Split", icon: 'edit'},
                        "edit": {name: "Search-container-option", icon: "edit"},
                        "delete": {name: "Delete", icon: "delete"},
                        "sep1": "---------",
                    },
                    callback: function(itemKey, opt, rootMenu, originalEvent) {
                        console.log('searchContainer ContextMenu', itemKey, opt);
                        switch (itemKey){
                            case "delete" :
                                GlobalService.sendDeleteMessage(opt.$trigger[0]);
                                GlobalService.deleteService(opt.$trigger[0]);
                                break;
                            case "split":
                                GlobalService.splitService(opt.$trigger[0]);
                                break;
                        }
                    }
                    // there's more, have a look at the demos and docs...
                });
                break;

            case "dews-mobile-button" :
                $.contextMenu({
                    // define which elements trigger this menu
                    selector: ".ui-selected",
                    // define the elements of the menu
                    items: {
                        "b1": {name: "ButtonOption1", icon: "edit"},
                        "delete": {name: "Delete", icon: "delete"},
                        "sep1": "---------",
                    },
                    callback: function(itemKey, opt, rootMenu, originalEvent) {
                        console.log(itemKey, opt);
                        switch (itemKey){
                            case "delete" :
                                GlobalService.sendDeleteMessage(opt.$trigger[0]);
                                GlobalService.deleteService(opt.$trigger[0]);
                        }
                    }
                    // there's more, have a look at the demos and docs...
                });
                break;
        }
    },

    destroyContextMenu(){
        $.contextMenu('destroy');
    }
}

