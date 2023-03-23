import {Model} from "./Model.js";

export class User extends Model {
    constructor(firstname, lastname, email, id = 0) {
        super('/users');
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
        if (id > 0) {
            this._id = id;
        }
    }

    init(parameters) {
        if (parameters.firstname) {
            this.firstname = parameters.firstname;
        }
        if (parameters.lastname) {
            this.lastname = parameters.lastname;
        }
        if (parameters.email) {
            this.email = parameters.email;
        }
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(value) {
        this._lastname = value;
    }

    get firstname() {
        return this._firstname;
    }

    set firstname(value) {
        this._firstname = value;
    }
}
