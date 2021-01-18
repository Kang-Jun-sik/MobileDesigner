export default {

    //IDE Create Information for create Data Information
    createDataMessage(createData, children, elm) {
        if (children === undefined)
            return;

        for (let child of children) {
            if (child.hasAttribute('uid')) {
                const childUID = child.getAttribute('uid');
                const childControlType = childUID.substring(0, childUID.lastIndexOf('-'));
                const childData = document.createElement(childControlType);
                childData.setAttribute('uid', childUID);

                const childElement = elm.querySelector(`[uid=${childUID}]`);
                const parentElement = childElement.parentElement.closest(`[uid]`);

                if (createData.getAttribute('uid') == parentElement.getAttribute('uid'))
                    createData.appendChild(childData);
                else
                    createData.querySelector(`[uid=${parentElement.getAttribute('uid')}]`).appendChild(childData);
            }
            this.createDataMessage(createData, child.children, elm);
        }
    },

    //IDE Create Information for Splitting
    createSplitInfo(obj){
        console.log('createSplitInfo');
    }
}
