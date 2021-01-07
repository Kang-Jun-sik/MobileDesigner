const mobileDesignerToIDE = (commandType, elm, parentUID, key) => {
    const XMLWriter = require('xml-writer');
    const xw = new XMLWriter;
    const elementUid = elm.getAttribute('uid');
    const controlIndex = elementUid.lastIndexOf('-');
    const control = elementUid.substring(0, controlIndex);

    let obj = {};
    switch (commandType) {
        case "select" :
            obj = {
                'commandType': commandType,
                'data': `<?xml version="1.0"?><${control} uid="${elm.getAttribute('uid')}"/>`
            }
            break;
        case "create":
            obj = {
                'commandType': commandType,
                'parentId': parentUID,
                'data': `<?xml version="1.0"?><${control} uid="${elm.getAttribute('uid')}"/>`
            }
            break;
        case "delete":
            obj = {
                'commandType': commandType,
                'parentId': parentUID,
                'data': `<?xml version="1.0"?><${control} uid="${elm.getAttribute('uid')}"/>`
            }
            break;
    }

    console.log(obj);
    // eslint-disable-next-line no-undef
    chromiumObject.mobileDesignerToIDE(obj); //실제 IDE 데이터 전송 로직
};

export default mobileDesignerToIDE;
