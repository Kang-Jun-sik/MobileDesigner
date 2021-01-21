export default {

    //IDE Create Information for create Data Information
    createDataMessage(createData, children, elm) {
        if (children === undefined)
            return;

        for (let child of children) {
            if (child.hasAttribute('uid')) {
                const childUID = child.getAttribute('uid');
                const childControlType = childUID.substring(0, childUID.lastIndexOf('-'));
                const childData = document.createElement(childControlType);
                childData.setAttribute('uid', childUID);

                const childElement = elm.querySelector(`[uid=${childUID}]`);
                const parentElement = childElement.parentElement.closest(`[uid]`);

                if (createData.getAttribute('uid') == parentElement.getAttribute('uid'))
                    createData.appendChild(childData);
                else
                    createData.querySelector(`[uid=${parentElement.getAttribute('uid')}]`).appendChild(childData);
            }
            this.createDataMessage(createData, child.children, elm);
        }
    },

    //컨트롤 위치 정보 생성 함수
    createPositionInfo(elm, elementUid, parentUID) {
        let obj;
        let index;
        let sameLevelControlList;
        const parentTypeList = ['search-container-field', 'form-container-field', 'button-group', 'checkbox-group', 'radio-group'];
        const parent = elm.parentElement.closest('.dews-mobile-component');
        if (parentTypeList.includes(parent.classList[0]))
            sameLevelControlList = parent.querySelectorAll('.dews-mobile-component'); //Child Element들이 li,span 등 tag로 Wrapping되어 추가되는 경우
        else
            sameLevelControlList = parent.querySelectorAll(':scope > .dews-mobile-component'); //Direct Child로 추가되는 경우

        for (let idx = 0; idx < sameLevelControlList.length; idx++) {
            if (sameLevelControlList[idx].getAttribute('uid') === elementUid) {
                index = idx;
                break;
            }
        }
        obj =
            {
                'commandType': 'change_control',
                'uid': elementUid,
                'parentId': parentUID,
                'index': index,
            }
        return obj;
    },
    
    //IDE Create Information for Splitting
    createSplitInfo(obj) {
        console.log('createSplitInfo');
    }
}