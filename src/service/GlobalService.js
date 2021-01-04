import DeleteService from "@/service/DeleteService";

export default {
    /**
     * 디자이너 키바인딩
     */
    keyBinding() {
        document.addEventListener('keydown', function (event) {
            const key = event.key;
            if (key === "Delete") {
                if (window.selectedItem.classList.contains('main-designer')) return;
                if (window.selectedItem) {
                    DeleteService.sendDeleteMessage(window.selectedItem);
                    DeleteService.deleteControl(window.selectedItem);
                }
            }
        });
    },

    checkComplex(component) {
        return component.closest('.dews-mobile-complex');
    },
}
