import globalservice from "@/service/globalservice";

export default {

    init() {
        window.services = new Map(); //글로벌 서비스를 위한 서비스 Map 등록
        window.services.set(globalservice.OPEN.openservice.name, globalservice.OPEN.openservice);
    }
}
