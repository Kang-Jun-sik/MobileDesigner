import store from "@/store/index";
import ChangeService from "@/service/ChangeService";
import mobileDesignerToIDE from "@/utils/mobileDesignerToIDE";

export default {
    /*
    * 컨트롤 속성 변경 메세지 (Mobile Designer --> IDE)
    * */
    sendChangeMessage(...changeData) {
        const [attrKey, attrValue, controlUid] = changeData;

        mobileDesignerToIDE({
            commandType: 'change',
            data: {
                controlAttributeKey: attrKey,
                controlAttributeValue: attrValue,
                controlUniqueId: controlUid,
            }
        });
    },

    /*
    * IDE로부터 컨트롤 변경 메세지 처리
    * */
    changeFromIDE(args) {
        console.log('Change from IDE');
        if (args === undefined) return;

        const obj = JSON.parse(args);
        const controlUid = obj["controlUniqueId"];
        let controlType;
        if (controlUid) {
            controlType = controlUid.substring(0, controlUid.lastIndexOf('-'));
        }

        switch (controlType) {
            case 'dews-button' :
                ChangeService.changeButton(args);
                break;
        }
    },

    /*
    * 현재 선택된 컨트롤을 얻어와 변경 로직 수행
    * 1) Vuex에서 아이템 찾기(uid를 사용하여 찾음)
    * 2) Component의 method 호출
    * */

    /*
    * Button Component 변경 로직
    * */
    changeButton(args) {
        const obj = JSON.parse(args);
        const uid = obj["controlUniqueId"];
        const prop = obj["controlAttributeKey"];
        const value = obj["controlAttributeValue"];

        let component;
        switch (prop) {
            case 'text':
                component = store.state.component.items.find(item => item.uid === uid);
                component.setText(value);
                break;
        }
    }
}
