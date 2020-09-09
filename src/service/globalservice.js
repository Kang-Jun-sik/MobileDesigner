import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

export default {
    OPEN: {
        openService(args) {
            console.log(args);
        }
    },
    RESIZE: {
        canresizeable(param) {
            let clsName = '.' + param;
            $(clsName).resizable({
                delay: 0,
                // eslint-disable-next-line no-unused-vars
                resize: function (e, ui) {
                    //e.stopPropagation();
                },
                // eslint-disable-next-line no-unused-vars
                start: function (e, ui) {
                    //e.stopPropagation();
                },
                // eslint-disable-next-line no-unused-vars
                stop: function (e, ui) {
                    //e.stopPropagation();
                }
            });
        }
    }
}
