import store from "@/store";
import makeForIDEInfo from "@/utils/makeForIDEInfo";
import mobileDesignerToIDE from "@/utils/mobileDesignerToIDE";

export default {
    /*
    * IDE Create Information for create Data Information
    * */
    createDataMessage(createData, children, elm) {
        if (children === undefined) return;

        for (let child of children) {
            if (child.hasAttribute('uid')) {
                const childUID = child.getAttribute('uid');
                const childControlType = childUID.substring(0, childUID.lastIndexOf('-'));
                const childData = document.createElement(childControlType);
                childData.setAttribute('uid', childUID);

                const childElement = elm.querySelector(`[uid=${childUID}]`);
                const parentElement = childElement.parentElement.closest(`[uid]`);

                if (createData.getAttribute('uid') === parentElement.getAttribute('uid')) {
                    createData.appendChild(childData);
                } else {
                    createData.querySelector(`[uid=${parentElement.getAttribute('uid')}]`).appendChild(childData);
                }
            }
            this.createDataMessage(createData, child.children, elm);
        }
    },

    /*
    * CreateMessage, PositionInfo의 Index 찾기 공통 함수
    * */
    makeCreateMessage(control) {
        const parent = control.parentElement.closest('.dews-mobile-component');
        const parentUid = parent.getAttribute('uid') ? parent.getAttribute('uid') : '';
        const parentDataUid = store.state.component.items.find(item => item.uid === parentUid)?.dataUid;

        let sameLevelControlList, filterList;
        if (parentDataUid) {
            const parentElement = parent.querySelector(`[data-uid=${parentDataUid}]`);
            sameLevelControlList = parentElement.querySelectorAll('.dews-mobile-component');
            filterList = Array.from(sameLevelControlList).filter(control => control.closest(`[data-uid=${parentDataUid}]`) === parentElement);
        } else {
            sameLevelControlList = parent.querySelectorAll('.dews-mobile-component');
            filterList = Array.from(sameLevelControlList).filter(control => control.parentElement === parent);
        }
        const index = filterList.findIndex(filterControl => filterControl.getAttribute('uid') === control.getAttribute('uid'));

        return {
            elm: control,
            parentId: parentUid,
            index: index
        }
    },

    /*
    * 컨트롤 위치 정보 생성 함수
    * */
    createPositionInfo(element) {
        const changePosition = {
            commandType: 'change_control',
            uid: element.getAttribute('uid')
        };
        const makeMessage = makeForIDEInfo.makeCreateMessage(element);
        delete makeMessage.elm;

        return {
            ...changePosition,
            ...makeMessage
        }
    },
}
