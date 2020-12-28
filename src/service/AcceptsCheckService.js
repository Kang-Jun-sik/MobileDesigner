const componentAcceptsCheck = (component, target) => {
    const checkedComponent = component.classList.contains('dews-control-list') ?
        component.classList[component.classList.length - 1] : component.classList[0];
    const dropTarget = target.classList[0];

    const componentInformation = {
        "dews-mobile-panel": ["main-designer"],
        "dews-mobile-item": ["main-designer"],
        "dews-mobile-box": ["main-designer", "dews-mobile-item"],
        "dews-mobile-tabs": ["main-designer", "dews-mobile-item"],

        "dews-mobile-searchContainer": ["dews-box-content"],
        "dews-mobile-listContainer": ["dews-box-content"],
        "dews-mobile-formContainer": ["dews-box-content"],

        "dews-mobile-button": ["form-field"],
        "dews-mobile-textbox": ["form-field"],
        "dews-mobile-checkbox": ["form-field"],
        "dews-mobile-radiobutton": ["form-field"],
        "dews-mobile-maskbox": ["form-field"],
        "dews-mobile-numeric": ["form-field"],

        "dews-mobile-datepicker": ["form-field"],
        "dews-mobile-periodPicker": ["form-field"],
        "dews-mobile-timePicker": ["form-field"],

        "dews-mobile-dropdownButton": ["form-field"],
        "dews-mobile-dropdownList": ["form-field"],
    }

    return componentInformation[checkedComponent].includes(dropTarget);
}

export default componentAcceptsCheck;
