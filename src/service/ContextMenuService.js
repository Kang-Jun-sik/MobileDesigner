
import $ from "jquery";
import 'jquery-contextmenu'
import DeleteService from "@/service/DeleteService";
import SplitService from "@/service/SplitService";
import AddChildService from "./AddChildService";
import SelectService from "./SelectService";
import CodePickerService from "@/service/CodePickerService";

export default {
    /*
    * 마우스 오른쪽 클릭
    * ContextMenu 호출
    * */
    getContextMenu(instance) {
        switch (instance.classList[0]) {
            case "main-designer" :
                break;
            case "dews-mobile-item":
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "split": {
                            name: "분할",
                            icon: "ic-split"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        }
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "split":
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
                        "split": {
                            name: "분할",
                            icon: "ic-split"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        }
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "split":
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
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "addTab": {
                            name: "Add Tab",
                            icon: "edit"
                        },
                        "split": {
                            name: "분할",
                            icon: "ic-split"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "addTab":
                                AddChildService.addTabsChild(opt.$trigger[0]);
                                break;
                            case "split":
                                SplitService.verticalSplit(opt.$trigger[0]);
                                break;
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-tab':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "selectTabs": {
                            name: "Select Tabs",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                            case "selectTabs":
                                SelectService.selectControl(opt.$trigger[0].closest('.dews-mobile-tabs'));
                                break;
                        }
                    }
                });
                break;
            case "dews-mobile-searchContainer" :
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
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
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                        "addFormSection": {
                            name: 'Add FormSection',
                            icon: 'edit'
                        }
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                            case "addFormSection":
                                console.log(opt);
                                AddChildService.addFormSection(opt.$trigger[0]);
                                SelectService.setPosition(window.selectedItem);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-infoContainer':
                break;
            case 'dews-mobile-formSection':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-containerContent':
                break;
            case 'dews-mobile-codePicker':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "openCodePicker": {
                            name: 'Open CodePicker',
                            icon: 'edit'
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "openCodePicker" :
                                CodePickerService.openCodePicker(opt.$trigger[0]);
                                break;

                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-containerButton':
                break;
            case "dews-mobile-button" :
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-buttonGroup':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-checkbox':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-checkbox-group':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-complex':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "addComplexLine": {
                            name: "Add Complex Line",
                            icon: "edit"
                        },

                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "addComplexLine":
                                AddChildService.addComplexLine(opt.$trigger[0]);
                                SelectService.setPosition(window.selectedItem);
                                break;
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-datePicker':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-maskbox':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-monthPicker':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-numeric':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-periodPicker':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-radiobutton':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-radioGroup':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-textbox':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-timePicker':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-dropdownList':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-dropdownButton':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "addChildButton": {
                            name: "Add Child Button",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function (itemKey, opt) {
                        switch (itemKey) {
                            case "addChildButton":
                                AddChildService.addDropdownChildButton(opt.$trigger[0]);
                                SelectService.setPosition(window.selectedItem);
                                break;

                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'button-list-child':
                break;
        }
    },

    destroyContextMenu() {
        $.contextMenu('destroy');
    }
}
