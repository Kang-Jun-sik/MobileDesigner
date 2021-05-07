import store from "@/store";
import makeForIDEInfo from "@/utils/makeForIDEInfo";
import mobileDesignerToIDE from "@/utils/mobileDesignerToIDE";
import DeleteService from "../service/DeleteService";

export default {
    /*
    * IDE Create Information for create Data Information
    **/
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

                if (createData.getAttribute('uid') === parentElement.getAttribute('uid'))
                    createData.appendChild(childData);
                else
                    createData.querySelector(`[uid=${parentElement.getAttribute('uid')}]`).appendChild(childData);
            }
            this.createDataMessage(createData, child.children, elm);
        }
    },

    /*
    * CreateMessage, PositionInfo의 Index 찾기 공통 함수
    **/
    makeCreateMessage(control) {
        const parent = control.parentElement.closest('.dews-mobile-component') ?
            control.parentElement.closest('.dews-mobile-component') :
            control.parentElement;
        const parentUid = parent.getAttribute('uid');
        const drawerUid = parent.getAttribute('drawlayoutuid');
        const parentDataUid = store.state.component.items.find(item => item.uid === parentUid)?.dataUid ?
                                store.state.component.items.find(item => item.uid === parentUid)?.dataUid :
                                drawerUid;
        let sameLevelControlList = [];
        let filterList;

        //Dragula Area가 존재하는 Case
        if (parentDataUid) {
            const parentElement = parent.querySelector(`[data-uid=${parentDataUid}]`) ?
                parent.querySelector(`[data-uid=${parentDataUid}]`) :
                parent;
            if (this.parentTypeGroupCheck(parentElement)) {
                sameLevelControlList = parentElement.querySelectorAll('.dews-mobile-component');
                filterList = Array.from(sameLevelControlList).filter(control =>
                    control.closest(`[data-uid=${parentDataUid}]`) === parentElement);
            } else {
                if (parentElement.classList.contains("complex-line")) {
                    //Complex control indexing 계산 로직 처리
                    let scopeList = parentElement.querySelectorAll(':scope > div');
                    scopeList.forEach(litem => sameLevelControlList.push(litem.querySelector('.dews-mobile-component')));
                    filterList = Array.from(sameLevelControlList).filter(control =>
                        control.closest(`[data-uid=${parentDataUid}]`) === parentElement);
                } else {
                    //codepicker data 영역에 올라가는 경우 처리
                    if (parentElement.classList.contains('codepicker-data')) {
                        let scopeList = parentElement.querySelectorAll(':scope > div');
                        filterList = Array.from(scopeList).filter(control =>
                            control.classList.contains('dews-mobile-component'));
                    } else {
                        //아이템이 >li 형태로 추가되는 case
                        let scopeList = parentElement.querySelectorAll(':scope > li');
                        scopeList.forEach(litem => sameLevelControlList.push(litem.querySelector('.dews-mobile-component')));
                        filterList = Array.from(sameLevelControlList).filter(control =>
                            control.closest(`[data-uid=${parentDataUid}]`) === parentElement);
                    }
                }
            }
        } else {
            sameLevelControlList = parent.querySelectorAll('.dews-mobile-component');
            filterList = Array.from(sameLevelControlList).filter(control =>
                control.parentElement.closest('.dews-mobile-component') === parent);
        }
        const index = filterList.findIndex(filterControl => filterControl.getAttribute('uid') === control.getAttribute('uid'));

        return {
            elm: control,
            parentId: parentUid ? parentUid : parentDataUid,
            index: index
        }
    },

    //그룹 Control 포함된 경우 index type 체크하기 위해 호출
    parentTypeGroupCheck(element) {
        let isGroupType = false;
        const classNames = ['checkbox-group', 'radio-group', 'dews-box-content', 'list-container-field'];
        if (classNames.some(cls => element.classList.contains(cls))) {
            isGroupType = true;
        }
        return isGroupType;
    }
}
