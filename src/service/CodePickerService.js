import store from "@/store/index";

export default {
    openCodePicker(eventTarget) {
        const target = eventTarget.classList.contains('dews-mobile-component') ? eventTarget : this.findTarget(eventTarget);
        const layoutTarget = eventTarget.classList.contains('dews-layout-component') ? eventTarget : this.findLayoutTarget(eventTarget);
        const $drawerArea = document.querySelector('.designer-drawer');
        if (target.classList.contains('dews-mobile-codePicker')) {
            if ($drawerArea.hasChildNodes()) {
                $drawerArea.firstElementChild.classList.remove('open');
                $drawerArea.firstElementChild.remove();
            }
            const codePicker = store.state.component.items.find(item => item.uid === target.getAttribute('uid'));
            const drawer = codePicker.$refs.drawerLayout;
            const $drawer = drawer.$el;
            $drawerArea.appendChild($drawer);
            $drawer.classList.add('open');
        } else if ($drawerArea.hasChildNodes()) {
            if (target.classList.contains('main-designer') || (layoutTarget && !layoutTarget.classList.contains('dews-mobile-layer'))) {
                $drawerArea.firstElementChild.classList.remove('open');
                $drawerArea.firstElementChild.remove();
            }
        }
    },

    findLayoutTarget(target) {
        return target.closest('.dews-layout-component');
    },

    findTarget(target) {
        return target.closest('.dews-mobile-component');
    }
}
