import $ from "jquery";
import 'jquery-contextmenu'

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
                        "view": {name: "View", icon: "view"}, // This is own custom FontAwesome icon
                        "cut":  {name: "mainDesignerOption2", icon: "cut"},
                        "sep1": "---------",
                    },
                    callback: function(itemKey, opt, rootMenu, originalEvent) {


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
                        "edit": {name: "SearchOption1", icon: "edit"},
                        "cut":   {name: "SearchOption2", icon: "cut"},
                        "sep1": "---------",
                    },
                    callback: function(itemKey, opt, rootMenu, originalEvent) {

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
                        "sep1": "---------",
                    },
                    callback: function(itemKey, opt, rootMenu, originalEvent) {


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

