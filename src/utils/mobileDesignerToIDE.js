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

let mobileDesignerToIDE = (commandType, elm, parentUID, key) => {
    let XMLWriter = require('xml-writer');
    let xw = new XMLWriter;
    let obj = {};
    let value;

    /*
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
    */
    obj = {
        'commandType': commandType,
        'data': `<?xml version="1.0"?><${elm.classList[0]} uid="${elm.getAttribute('uid')}"/>`
    }
    console.log(obj);
    // eslint-disable-next-line no-undef
    chromiumObject.mobileDesignerToIDE(obj); //실제 IDE 데이터 전송 로직
};

export {mobileDesignerToIDE};
