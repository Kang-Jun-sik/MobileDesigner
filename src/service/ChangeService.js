import GlobalService from "@/service/GlobalService";
import store from "@/store";
import ChangeService from "@/service/ChangeService";

//IDE로부터 컨트롤 변경 메세지 처리
export default {
    changeFromIDE(args) {
        console.log('Change from IDE');

        if (args == undefined)
            return;

        let obj = JSON.parse(args);
        let controlUid = obj["controlUniqueId"];
        let controlType

        if (controlUid)
            controlType = controlUid.substring(0, controlUid.lastIndexOf('-'));

        switch (controlType) {
            case 'dews-button' :
                ChangeService.changeTextBox(args);
                break;
        }
    },

    changeTextBox(args) {
        let obj = JSON.parse(args);
        //현재 선택된 컨트롤을 얻어와 변경 로직 수행
        let uid = obj["controlUniqueId"];
        let prop = obj["controlAttributeKey"];
        let value = obj["controlAttributeValue"];
        let component
        switch (prop)
        {
            case 'text':
                //(1) vuex에서 아이템을 찾는다.. uid로 찾는다..
                component = window.Vue.$store.state.component.items.find(item=>item.uid === uid);
                //(2) 관련 함수를 호출한다...
                component.setText(value);
                break;
        }
    }
}
