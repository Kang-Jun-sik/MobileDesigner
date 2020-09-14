/*
 *   디자이너 - IDE 데이터 통신 (디자이너 -> IDE)
 *   commandType
 *   create: 컨트롤 생성
 *   request_gridColumn: 그리드컬럼창 오픈 요청
 *   request_treegridColumn : 트리그리드컬럼창 오픈 요청
 *   request_dropdown_mockup : 드롭다운 목업 오픈 요청
 *   request_treeview_mockup : 트리뷰 목업 오픈 요청
 *   request_table: 테이블 생성창 오픈 요청
 *   request_javascript: 자바스크립트 코딩창 오픈 요청
 *   request_complexControl: 복합컨트롤 생성창 오픈
 *   change_columns: 그리드 컬럼 변경
 *   change_control: 컨트롤 순서 변경
 *   change: 컨트롤 변경
 */

let mobileDesignerToIDE = (commandType, args) => {
    let obj = {};
    if (commandType === 'create') {
        obj = {
            'commandType': commandType,
            'args': args
            //2018.05.09 hju - 컨트롤 생성 시 크기도 넘겨준다
            //'width': elm.selectedItem ? elm.selectedItem.target.getBoundingClientRect().width : '',
            //'height': elm.selectedItem ? elm.selectedItem.target.getBoundingClientRect().height : ''
        }
    }

    /*
    let XMLWriter = require('xml-writer');
    let xw = new XMLWriter;
    let obj = {};
    let value;

    //2018.02.21 hju - 자식 노드 찾는 function 생성
    let childInfo = function (elm) {
        if (elm) {
            if (elm.children) {
                for (let i = 0; i < elm.children.length; i++) {
                    let elc = elm.children[i];
                    xw.startElement(elc.uid.split('-')[0], '').writeAttribute('uid', elc.uid);
                    xw.writeAttribute('parentUID', elc.parentUID);
                    if (elc.option) {
                        for (let attIdx in elc.option) {
                            if (elc.container.classList.contains('dews-dialog-contents')) {
                                if (attIdx !== 'uid') {
                                    xw.writeAttribute(attIdx, elc.option[attIdx]);
                                }
                            } else {
                                if (!(elc.uid.split('-')[0] === 'canvas' && (attIdx === 'uid'))) {
                                    xw.writeAttribute(attIdx, elc.option[attIdx]);
                                }
                            }
                        }
                    }
                    xw.endDocument();
                    childInfo(elc);
                    xw.endElement(elc.uid.split('-')[0], '');
                }
            }
        }
    }

    if (commandType !== 'change_columns' && commandType !== 'change_control') {
        if (elm) {
            if (elm.uid) {
                xw.startDocument().startElement(elm.uid.split('-')[0], '').writeAttribute('uid', elm.uid);
                if (elm.option) {
                    for (let attrIdx in elm.option) {
                        if (elm.container.classList.contains('dews-dialog-contents')) {
                            if (attrIdx !== 'uid') {
                                xw.writeAttribute(attrIdx, elm.option[attrIdx]);

                                if (commandType === 'change') {
                                    if (attrIdx === key) {
                                        value = elm.option[attrIdx];
                                    }
                                }

                            }
                        } else if (commandType === 'change') {
                            if (attrIdx === key) {
                                value = elm.option[attrIdx];
                            }
                        } else if (commandType === 'addButton') {//2018.06.18 hju - 드랍다운버튼과 스플릿버튼의 버튼 추가
                            if (elm.uid.split('-')[0] === 'dropdownbutton') {
                                value = 'Button';
                            } else if (elm.uid.split('-')[0] === 'splitbutton') {
                                value = 'SplitButton';
                            }
                            break;
                        } else {
                            if (!(elm.uid.split('-')[0] === 'canvas' && (attrIdx === 'uid'))) {
                                xw.writeAttribute(attrIdx, elm.option[attrIdx]);
                            }
                        }
                    }
                }
                //2018.02.21 hju - 자식 노드가 있는 경우 자식 노드까지 xml을 생성하기 위한 작업
                if (commandType === 'delete') {
                    if (elm.children) {
                        xw.endDocument();
                        childInfo(elm);
                    }
                }
                xw.endElement(elm.uid.split('-')[0], '');
            } else {
                return false;
            }
        }
    }

    if (commandType === 'create') {
        obj = {
            'commandType': commandType,
            'parentId': parentUID,
            'data': xw.output,
            //2018.05.09 hju - 컨트롤 생성 시 크기도 넘겨준다
            //'width': elm.selectedItem ? elm.selectedItem.target.getBoundingClientRect().width : '',
            //'height': elm.selectedItem ? elm.selectedItem.target.getBoundingClientRect().height : ''
        }
    } else if (commandType === 'request_gridColumn') {
        obj = {
            'commandType': 'griddoubleclick',
            'uid': elm.uid,
            'parentId': parentUID,
            'x': elm.selectedItem.target.getBoundingClientRect().x,
            'y': elm.selectedItem.target.getBoundingClientRect().y,
            'width': elm.selectedItem.target.getBoundingClientRect().width,
            'height': elm.selectedItem.target.getBoundingClientRect().height
        }
    } else if (commandType === 'request_treegridColumn') {
        obj = {
            'commandType': 'treegrid_doubleclick',
            'uid': elm.uid,
            'parentId': parentUID,
            'x': elm.selectedItem.target.getBoundingClientRect().x,
            'y': elm.selectedItem.target.getBoundingClientRect().y,
            'width': elm.selectedItem.target.getBoundingClientRect().width,
            'height': elm.selectedItem.target.getBoundingClientRect().height
        }
    } else if (commandType === 'request_dropdown_mockup') {
        obj = {
            'commandType': 'dropdownlist_doubleclick',
            'uid': elm.uid,
            'parentId': parentUID,
            'x': elm.selectedItem.target.getBoundingClientRect().x,
            'y': elm.selectedItem.target.getBoundingClientRect().y,
            'width': elm.selectedItem.target.getBoundingClientRect().width,
            'height': elm.selectedItem.target.getBoundingClientRect().height
        }
    } else if (commandType === 'request_treeview_mockup') {
        obj = {
            'commandType': 'treeview_doubleclick',
            'uid': elm.uid,
            'parentId': parentUID,
            'x': elm.selectedItem.target.getBoundingClientRect().x,
            'y': elm.selectedItem.target.getBoundingClientRect().y,
            'width': elm.selectedItem.target.getBoundingClientRect().width,
            'height': elm.selectedItem.target.getBoundingClientRect().height
        }
    } else if (commandType === 'request_table') { //아직 안됨. 테이블은 아직 구현 X
        obj = {
            'commandType': commandType,
            'data': ''
        }
    } else if (commandType === 'request_javascript') { //자바스크립트 창 띄워주기
        obj = {
            'commandType': commandType,
            'data': {
                'uid': elm.uid, //어느 창에서 띄울지
                'eventType': 'click'
            }
        }
    } else if (commandType === 'request_complexControl') { //두개의 컨트롤을 넣어줄때
        obj = {
            'commandType': commandType,
            'parentId': elm.uid,
            'data': ''
        }
    } else if (commandType === 'change_columns') { //드래그같은거 이용해서 컬럼 바꿀때 . ide쪽으로도 보내부는거
        obj = {
            'commandType': commandType,
            'controlId': parentUID,
            'data': elm
        };
    } else if (commandType === 'change_control') { //컨트롤들의 순서바꿔줄때, 바뀐 인덱스 값만 갖고잇으면댐.
        obj = {
            'commandType': commandType,
            'uid': elm.uid,
            'parentId': elm.parentUID,
            'index': elm.index
        };
    } else if (commandType === 'change') {
        obj = {
            'commandType': commandType,
            'uniqueId': elm.uid,
            'AttributeKey': key,
            'AttributeValue': value
        };
    } else if (commandType === 'delete') {//2018.02.21 hju - Undo/Redo 시 삭제된 컨트롤에 대한 정보를 넘기기 위해 Delete Command에 obj를 변경
        obj = {
            'commandType': commandType,
            'parentId': parentUID,
            'data': xw.output
        }
    } else if (commandType === 'init') { //2018.03.05 hju - 파일 오픈 알림
        obj = {
            'commandType': commandType
        }
    } else if (commandType === 'initControl') { //2018.03.05 hju - 컨트롤 이벤트 시작 전 알림
        obj = {
            'commandType': commandType
        }
    } else if (commandType === 'request_searchCondition') { //2018.03.19 hju - 조회조건창 띄우도록 IDE에 전달
        obj = {
            'commandType': commandType,
            'parentId': elm.uid,
            'data': ''
        }
    } else if (commandType === 'addButton') { //2018.06.18 hju - 드랍다운버튼/스플릿버튼 버튼 추가 커맨드
        obj = {
            'commandType': commandType,
            'uniqueId': elm.uid,
            'AttributeValue': value
        }
    } else if (commandType === 'openStyle') { //2018.10.04 hju - style창 열기 전에 기존 style을 IDE로 전송
        obj = {
            'commandType': commandType,
            'uniqueId': elm.uid,
            'AttributeValue': value
        }
    } else if (commandType === 'convert_control') {//2019.02.28 hju - 컨트롤 변경 시 메시지 전송
        obj = {
            'commandType': commandType.toUpperCase(),
            'controlLabel': elm.selectedItem.target.closest('li').querySelector('label').innerText,
            'selectControl': elm.uid,
            'changeControl': key
        }
    } else if (commandType === 'DROPDOWNBINDING') { //2019.07.17 hju - 드랍다운리스트(멀티드랍다운리스트X)데이터바인딩 옵션 추가
        obj = {
            'commandType': commandType.toUpperCase(),
            'controlLabel': elm.selectedItem.target.closest('li').querySelector('label').innerText,
            'uid': elm.uid
        }
    } else {
        obj = {
            'commandType': commandType,
            'data': xw.output
        }
    }
    */
    console.log(obj);

    // eslint-disable-next-line no-undef
    chromiumObject.mobileDesignerToIDE(obj); //실제 IDE 데이터 전송 로직
};

export {mobileDesignerToIDE};
