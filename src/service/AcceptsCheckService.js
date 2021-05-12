const componentAcceptsCheck = (component, target) => {
    if (component.tagName === 'LI') {
        component = component.firstChild;
    }

    const checkedComponent = component.classList.contains('dews-control-list') ?
        component.classList[component.classList.length - 1] : component.classList[0];
    const dropTarget = target.classList[0];

    const componentInformation = {
        "dews-mobile-panel": ["main-designer"],
        "dews-mobile-item": ["main-designer"],
        "dews-mobile-popup": ["main-designer"],
        "dews-mobile-box": ["main-designer", "dews-mobile-item"],
        "dews-mobile-tabs": ["main-designer", "dews-mobile-item"],

        "dews-mobile-searchContainer": ["dews-box-content", "dews-mobile-tab", "popup-content"],
        "dews-mobile-listContainer": ["dews-box-content", "dews-mobile-tab", "popup-content"],
        "dews-mobile-formContainer": ["dews-box-content", "dews-mobile-tab", "popup-content"],
        "dews-mobile-infoContainer": ["dews-box-content", "dews-mobile-tab", "popup-content"],
        "dews-mobile-customContainer": ["dews-box-content", "dews-mobile-tab", "popup-content"],

        "dews-mobile-button": ["custom-button-field", "search-container-field", "form-container-field", "button-group", "complex-line", "codepicker-search-field", "custom-container-field"],
        "dews-mobile-textbox": ["search-container-field", "form-container-field", "complex-line", "codepicker-search-field", "custom-container-field"],
        "dews-mobile-checkbox": ["search-container-field", "form-container-field", "checkbox-group", "complex-line", "codepicker-search-field", "custom-container-field"],
        "dews-mobile-radiobutton": ["search-container-field", "form-container-field", "radio-group", "complex-line", "codepicker-search-field", "custom-container-field"],
        "dews-mobile-maskbox": ["search-container-field", "form-container-field", "complex-line", "codepicker-search-field", "custom-container-field"],
        "dews-mobile-numeric": ["search-container-field", "form-container-field", "complex-line", "codepicker-search-field", "custom-container-field"],

        "dews-mobile-buttonGroup": ["search-container-field", "form-container-field", "codepicker-search-field", "custom-container-field"],
        "dews-mobile-radioGroup": ["search-container-field", "form-container-field", "codepicker-search-field", "custom-container-field"],
        "dews-mobile-checkboxGroup": ["search-container-field", "form-container-field", "codepicker-search-field", "custom-container-field"],

        "dews-mobile-datePicker": ["search-container-field", "form-container-field", "complex-line", "codepicker-search-field", "custom-container-field"],
        "dews-mobile-periodPicker": ["search-container-field", "form-container-field", "complex-line", "codepicker-search-field", "custom-container-field"],
        "dews-mobile-monthPicker": ["search-container-field", "form-container-field", "complex-line", "codepicker-search-field", "custom-container-field"],
        "dews-mobile-yearPicker": ["search-container-field", "form-container-field", "complex-line", "codepicker-search-field", "custom-container-field"],
        "dews-mobile-timePicker": ["search-container-field", "form-container-field", "complex-line", "codepicker-search-field", "custom-container-field"],
        "dews-mobile-codePicker": ["search-container-field", "form-container-field", "complex-line", "codepicker-search-field", "custom-container-field"],
        "dews-mobile-zipcodePicker": ["search-container-field", "form-container-field", "complex-line", "codepicker-search-field", "custom-container-field"],

        "dews-mobile-dropdownButton": ["search-container-field", "form-container-field", "codepicker-search-field", "complex-line", "custom-container-field"],
        "dews-mobile-dropdownList": ["search-container-field", "form-container-field", "codepicker-search-field", "complex-line", "custom-container-field"],
        "dews-mobile-complex": ["search-container-field", "form-container-field", "codepicker-search-field", "custom-container-field"],

        "dews-mobile-cardlist": ["list-container-field", "custom-container-field", "codepicker-data"],
        "dews-mobile-card": ["cardlist"],
        "dews-mobile-datasource": ["datasource-area", "cardlist"],
        "dews-complexitem": ["complex-line"]

    }

    let acceptCheck = false;
    try {
        acceptCheck = componentInformation[checkedComponent].includes(dropTarget);
    } catch (error) {
        console.error(error);
    }

    return acceptCheck;
}

export default componentAcceptsCheck;
