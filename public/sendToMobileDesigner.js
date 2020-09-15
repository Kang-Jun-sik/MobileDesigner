/**
 * IDE --> MOBILE DESIGNER 데이터 수신 처리부
 *
 */

(function () {
    let messageHandler = window.messageHandler || {};

    function MessageFromIDE(args) {
        let obj = JSON.parse(args);
        console.log(args);

        if (obj.commandType.toUpperCase() === 'OPEN') {
            window.services.get("openService").call(this, args); // this(MessageFromIDE)가 메서드를 등록한 것처럼 호출해준다.
        }
    }

    messageHandler.MessageFromIDE = MessageFromIDE;
    window.messageHandler = messageHandler;
}());
