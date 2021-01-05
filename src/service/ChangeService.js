import GlobalService from "@/service/GlobalService";
import store from "@/store";
import ChangeService from "@/service/ChangeService";

//IDE로부터 컨트롤 변경 메세지 처리
export default {
    changeFromIDE(args){
        console.log('Change from IDE');
        let control;
        switch (control){
            case 'DewsTextBox' :
                ChangeService.changeTextBox(args);
                break;
        }
    },
    changeTextBox(args){
        //현재 선택된 컨트롤을 얻어와 변경 로직 수행
        window.selectedItem.onChange(args);
    }
}
