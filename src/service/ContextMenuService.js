import $ from "jquery";
import 'jquery-contextmenu'
import GlobalService from "@/service/GlobalService";

export default {
    getcontextmenu(instance) {
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
                        "edit": {name: "Search-container-option", icon: "edit"},
                        "delete": {name: "Delete", icon: "delete"},
                        "sep1": "---------",
                    },
                    callback: function(itemKey, opt, rootMenu, originalEvent) {
                        console.log(itemKey);
                        switch (itemKey){
                            case "delete" :
                                GlobalService.deleteService(opt.$trigger[0]);
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
                        console.log(itemKey);
                        switch (itemKey){
                            case "delete" :
                                GlobalService.deleteService(opt.$trigger[0]);
                        }
                    }
                    // there's more, have a look at the demos and docs...
                });
                break;
        }
    },
    destroycontextmenu(){
        $.contextMenu('destroy');
    }
}

