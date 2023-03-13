import {api} from "../api.js";

export class Model {
    api_path = '';

    constructor(path) {
        this.api_path = path;
    }

    save() {
        api.save(this)
    }

    delete() {
        api.delete(this)
    }
}
