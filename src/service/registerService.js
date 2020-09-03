import globalservice from "@/service/globalservice";

export default {
    init() {
        window.openService = globalservice.OPEN.open;
    }
}
