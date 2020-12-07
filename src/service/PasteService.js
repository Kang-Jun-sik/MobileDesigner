import GlobalService from "@/service/GlobalService";
import store from "@/store";

//IDE로 부터 Copy된 객체를 Designer에 Paste할 때 사용
export default {
    pasteFromIDE(target, parentUid){
        //(1) IDE로 부터 넘어온 데이터 전처리
        console.log('Paste from IDE');
        //(2) 전처리후 실제 Paste 로직 수행
        //let parent = store.state.component.items.find(item => item.uid === parentUid);
        // eslint-disable-next-line no-empty
        if(parent) {

        }
    }
}
