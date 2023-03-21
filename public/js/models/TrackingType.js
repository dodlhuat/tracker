import {Model} from "./Model.js";

export class TrackingType extends Model {
    constructor(name, id = 0) {
        super('/trackingtypes');
        this._name = name;
        if (id > 0) {
            this._id = id;
        }
    }

    init(parameters) {
        if (parameters.name) {
            this.name = name;
        }
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
}
