/**
 * IDE --> MOBILE DESIGNER 데이터 수신 처리부
 *
 */

(function () {
    let messageHandler = window.messageHandler || {};

    function MessageFromIDE(args) {
        let obj = JSON.parse(args);
        console.log(args);

        switch (obj.commandType.toUpperCase()) {
            //등록된 서비스를 호출
            case 'OPEN' :
                window.services.get("openService").call(this, args);
                break;
            case 'SELECT_IDE' :
                window.services.get("selectFromIDEService").call(this, args);
                break;
        }
    }

    messageHandler.MessageFromIDE = MessageFromIDE;
    window.messageHandler = messageHandler;
}());
