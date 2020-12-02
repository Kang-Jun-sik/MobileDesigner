/**
 * IDE --> MOBILE DESIGNER 데이터 수신 처리부
 *
 */

(function () {
    let messageHandler = window.messageHandler || {};

    function MessageFromIDE(args) {
        let obj = JSON.parse(args);
        console.log(args);
        //IDE와 Message를 맞춰줘야 한다.
        switch (obj.commandType.toUpperCase()) {
            //등록된 서비스를 호출
            case 'OPEN' :
                window.services.get("openService").call(this, args);
                break;
            case 'SELECT_IDE' :
                window.services.get("selectFromIDEService").call(this, args);
                break;
            case 'UNDO_REDO' :
                window.services.get("undoredoService").call(this, args);
                break;
            case 'PASTE' :
                break;
            case 'CREATE' :
                window.services.get("createItemService").call(this, args);
                break;
            case 'DELETE' :
                window.services.get("deleteItemService").call(this, args);
                break;
        }
    }

    messageHandler.MessageFromIDE = MessageFromIDE;
    window.messageHandler = messageHandler;
}());
