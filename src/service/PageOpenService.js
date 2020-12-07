import store from "@/store/index";
import PageOpenService from "@/service/PageOpenService";
import CreateService from "@/service/CreateService";

export default {
    /*
    * 페이지 오픈 서비스 (EWP -> MOBILE DESIGNER PAGE Rendering)
    * @param args
    * */
    openService(args) {
        //(1) IDE로부터 받은 데이터 전처리
        //let tdata = `{ "commandType":"open","data":"<?xml version=\\"1.0\\" encoding=\\"utf-8\\"?><page title=\\"141414\\" name=\\"12341\\" type=\\"mpage\\"><canvas uid=\\"canvas-1485142915100\\" type=\\"mpage\\" title=\\"141414\\" component=\\"\\" function=\\"\\"><pageInformation><version>1.0</version><create>kjs1436</create><builddate d4p1:nil=\\"true\\" xmlns:d4p1=\\"http://www.w3.org/2001/XMLSchema-instance\\" /><createdate>2020-09-17T16:15:16.7463121+09:00</createdate><modifieddate d4p1:nil=\\"true\\" xmlns:d4p1=\\"http://www.w3.org/2001/XMLSchema-instance\\" /></pageInformation><mainButtons uid=\\"mainButtons-1385142915113\\"><mainButton uid=\\"mainButton-1485142971049\\" id=\\"information\\" buttonAttr=\\"disabled\\" type=\\"information\\" /><mainButton uid=\\"mainButton-1485142971050\\" id=\\"localize\\" buttonAttr=\\"disabled\\" type=\\"localize\\" /><mainButton uid=\\"mainButton-1485142971051\\" id=\\"approval\\" buttonAttr=\\"normal\\" type=\\"approval\\" /><mainButton uid=\\"mainButton-1485142971052\\" id=\\"add\\" buttonAttr=\\"normal\\" type=\\"add\\" /><mainButton uid=\\"mainButton-1485142971053\\" id=\\"search\\" buttonAttr=\\"normal\\" type=\\"search\\" /><mainButton uid=\\"mainButton-1485142971054\\" id=\\"delete\\" buttonAttr=\\"normal\\" type=\\"delete\\" /><mainButton uid=\\"mainButton-1485142971055\\" id=\\"print\\" buttonAttr=\\"normal\\" type=\\"print\\" /><mainButton uid=\\"mainButton-1485142971056\\" id=\\"save\\" buttonAttr=\\"normal\\" type=\\"save\\" /><mainButton uid=\\"mainButton-1485142971057\\" id=\\"configure\\" buttonAttr=\\"normal\\" type=\\"configure\\" /></mainButtons><mLayout uid=\\"mLayout-1485142971058\\" id=\\"mlayout\\"><mButton uid=\\"mButton-1485142971058\\" id=\\"mbutton\\" buttonType=\\"normal\\" disabled=\\"false\\" /></mLayout></canvas><dataSources /><pageCssStyle><![CDATA[]]></pageCssStyle><stylesheets /><javascripts /><settings /><datas /></page>","localization":"ko-KR"}`;
        const obj = JSON.parse(args);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(obj.data, "application/xml");
        const canvasDoc = xmlDoc.getElementsByTagName('mobile-page')[0];
        const type = canvasDoc.attributes.getNamedItem('type').nodeValue;

        let mPage = store.state.component.items.find(item => item.uid.startsWith("mobile-page"));
        mPage.uid = canvasDoc.getAttribute('uid'); // 임시로 canvas에 uid 적용
        mPage.$el.setAttribute('uid', canvasDoc.getAttribute('uid')) // 임시로 canvas에 적용

        // eslint-disable-next-line no-empty
        if (type === 'mpage') {
            for (let i = 0; i < canvasDoc.childElementCount; i++) {
                if (canvasDoc.children[i].tagName === "pageInformation")
                    continue;
                if (canvasDoc.children[i].tagName === "mainButtons")
                    // eslint-disable-next-line no-empty
                {

                } else {
                    PageOpenService.pageParsing(canvasDoc.children[i], mPage.uid);
                    //pageParsing(canvasDoc.children[i], mPage.uid);
                }
            }
        }
    },

    /*
    * Recursive Function For Control Rendering
    * @param node
    * @param parentUid
    * */
    pageParsing(node, parentUid) {
        let instance = node.cloneNode();
        instance = PageOpenService.createControlFromData(instance);

        const parent = store.state.component.items.find(item => item.uid === parentUid);
        const parentMUid = parent.muid ? parent.muid : '';

        if (parentMUid) {
            parent.$el.querySelector(`[muid=${parentMUid}]`).appendChild(instance.$el);
        } else {
            parent.$el.appendChild(instance.$el);
        }

        if (node.childElementCount === 0) return;
        for (let i = 0; i < node.childElementCount; i++) {
            PageOpenService.pageParsing(node.children[i], instance.uid);
        }
    },

    /*
    * Xml Data --> Create Control Logic
    * @param control
    * */
    createControlFromData(control) {
        const uid = control.getAttribute('uid');
        const type = control.tagName;

        let instance;
        switch (type) {
            case 'mobile-area':
                instance = CreateService.addComponent('SearchContainer');
                break;
            case 'mobile-button':
                instance = CreateService.addComponent('Button');
                break;
            case 'dews-area-panel':
                instance = CreateService.addComponent('AreaPanel');
                break;
            case 'mobile-item':
                instance = CreateService.addComponent('AreaItem');
                break;
            case 'dews-box':
                instance = CreateService.addComponent('AreaBox');
                break;
        }

        instance.uid = uid;
        instance.$el.setAttribute('uid', uid);
        store.commit('addItem', instance);

        return instance;
    },
}
