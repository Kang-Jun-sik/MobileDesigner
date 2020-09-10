import dragula from "dragula";
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

export default {
    OPEN: {
        openService(args) {
            console.log(args);
        }
    },
    CREATEUID: {
        uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    },
    RESIZE: {
        canResize(param) {
            let clsName = "." + param.classList[param.classList.length - 1];
            $(clsName).resizable({
                delay: 0,
                // eslint-disable-next-line no-unused-vars
                resize: function (e, ui) {
                    e.stopPropagation();
                },
                // eslint-disable-next-line no-unused-vars
                start: function (e, ui) {
                    e.stopPropagation();
                },
                // eslint-disable-next-line no-unused-vars
                stop: function (e, ui) {
                    e.stopPropagation();
                }
            });
        }
    },
}
