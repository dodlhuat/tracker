import {Model} from "../models/Model.js";
import {utils} from "./utils.js";
import {loginOverlay} from "./login-overlay.js";

export let api = {
    ajaxPromise: function (url, parameters, type = 'GET') {
        url = 'http://127.0.0.1:8000/api' + url;
        let xhr = new XMLHttpRequest();
        return new Promise(function (resolve, reject) {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 300) {
                        reject(xhr.responseText);
                    } else {
                        resolve(xhr.responseText);
                    }
                }
            }
            if (type === 'POST') {
                // TODO: parameter url encoden
                const parameters_array = [];
                for (const [key, value] of Object.entries(parameters)) {
                    parameters_array.push(key + '=' + value);
                }
                url += '?' + parameters_array.join('&');
                parameters = null
            }
            xhr.open(type, url, true)
            xhr.setRequestHeader('Accept', 'application/json');
            // todo: aus dem speicher laden
            xhr.setRequestHeader('Authorization', 'Bearer ' + utils.cache('tracker-token'));
            xhr.send(parameters);
        });
    },
    /**
     *
     *
     * @param {Model} model
     * @param {string} response
     * @returns {Model}
     */
    init: function (model, response) {
        let m = new model();
        m.init(JSON.parse(response))
        return m;
    },
    /**
     * Get
     *
     * load a model by id
     *
     * @param {Model} model
     * @param {int} id
     */
    get: function (model, id) {
        let u = new model();
        return this.ajaxPromise(u.api_path, {id: id}, 'GET');
    },
    all: function (model) {

    },
    save: function (model) {

    },
    delete: function (model) {

    },
    checkToken: function () {
        let promise_value = false;
        return api.ajaxPromise('/token-check', {}).then(function (response) {
            if (response === '') {
                utils.showModal('error', {header: 'Error(s) occurred', content: 'Something went wrong!'});
            } else {
                response = JSON.parse(response);
                if (response.valid !== undefined && response.valid) {
                    promise_value = true;
                }
            }
            return new Promise((resolve) => {
                resolve(promise_value);
            });
        }, function (error) {
            if (window.location.pathname.split('/').at(-1) !== 'login.html') {
                loginOverlay.showLogin();
            }
            return new Promise((resolve) => {
                resolve(promise_value);
            });
        });
    },
    logout: () => {
        utils.cache('tracker-token', '');
    }
};
