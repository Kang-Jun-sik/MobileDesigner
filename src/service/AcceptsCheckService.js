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
        "dews-mobile-box": ["main-designer", "dews-mobile-item"],
        "dews-mobile-tabs": ["main-designer", "dews-mobile-item"],

        "dews-mobile-searchContainer": ["dews-box-content", "dews-mobile-tab"],
        "dews-mobile-listContainer": ["dews-box-content", "dews-mobile-tab"],
        "dews-mobile-formContainer": ["dews-box-content", "dews-mobile-tab"],
        "dews-mobile-infoContainer": ["dews-box-content", "dews-mobile-tab"],

        "dews-mobile-button": ["custom-button-field", "search-container-field", "form-container-field", "button-group"],
        "dews-mobile-textbox": ["search-container-field", "form-container-field"],
        "dews-mobile-checkbox": ["search-container-field", "form-container-field", "checkbox-group"],
        "dews-mobile-radiobutton": ["search-container-field", "form-container-field", "radio-group"],
        "dews-mobile-maskbox": ["search-container-field", "form-container-field"],
        "dews-mobile-numeric": ["search-container-field", "form-container-field"],

        "dews-mobile-buttonGroup": ["search-container-field", "form-container-field"],
        "dews-mobile-radioGroup": ["search-container-field", "form-container-field"],
        "dews-mobile-checkboxGroup": ["search-container-field", "form-container-field"],

        "dews-mobile-datePicker": ["search-container-field", "form-container-field"],
        "dews-mobile-periodPicker": ["search-container-field", "form-container-field"],
        "dews-mobile-monthPicker": ["search-container-field", "form-container-field"],
        "dews-mobile-timePicker": ["search-container-field", "form-container-field"],
        "dews-mobile-codePicker": ["search-container-field", "form-container-field"],
        "dews-mobile-zipcodePicker" : ["search-container-field", "form-container-field"],

        "dews-mobile-dropdownButton": ["search-container-field", "form-container-field"],
        "dews-mobile-dropdownList": ["search-container-field", "form-container-field"],
        "dews-mobile-complex": ["search-container-field", "form-container-field"],

        "dews-mobile-cardlist": ["list-container-field"],
        "dews-mobile-card": ["cardlist"],
        "dews-mobile-datasource": ["datasource-area", "cardlist"],
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
