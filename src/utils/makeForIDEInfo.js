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
        //index 계산
        const parent = elm.parentElement.closest('.dews-mobile-component');
        const controlType = elm.classList[0];
        const sameLevelControlList = parent.querySelectorAll(':scope > .dews-mobile-component');
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
