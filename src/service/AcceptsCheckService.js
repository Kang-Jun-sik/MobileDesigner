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
        "dews-mobile-infoContainer": ["dews-box-content"],

        "dews-mobile-button": ["search-container-field", "form-container-field"],
        "dews-mobile-textbox": ["search-container-field", "form-container-field"],
        "dews-mobile-checkbox": ["search-container-field", "form-container-field"],
        "dews-mobile-radiobutton": ["search-container-field", "form-container-field"],
        "dews-mobile-maskbox": ["search-container-field", "form-container-field"],
        "dews-mobile-numeric": ["search-container-field", "form-container-field"],

        "dews-mobile-buttonGroup": ["search-container-field", "form-container-field"],
        "dews-mobile-radioGroup": ["search-container-field", "form-container-field"],
        "dews-mobile-checkboxGroup": ["search-container-field", "form-container-field"],

        "dews-mobile-datePicker": ["search-container-field", "form-container-field"],
        "dews-mobile-periodPicker": ["search-container-field", "form-container-field"],
        "dews-mobile-monthPicker": ["search-container-field", "form-container-field"],
        "dews-mobile-timePicker": ["search-container-field", "form-container-field"],

        "dews-mobile-dropdownButton": ["search-container-field", "form-container-field"],
        "dews-mobile-dropdownList": ["search-container-field", "form-container-field"],
        "dews-mobile-complex": ["search-container-field", "form-container-field"],
    }

    return componentInformation[checkedComponent].includes(dropTarget);
}

export default componentAcceptsCheck;
