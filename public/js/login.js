import {utils} from "./utils.js";
import {api} from "./api.js";

utils.contentLoaded(function () {
    // utils.cache('tracker-token', '2|s1qbPJZUVfASxrWHNN6axf9axYRNNMx2EOQP9yf5')
    utils.cache('tracker-token', '3|s1qbPJZUVfASxrWHNN6axf9axYRNNMx2EOQP9yf5')

    api.checkToken()

    utils.on('click', utils.get('.submit-login'), function () {
        validateLogin();
        utils.showLoading();
        api.ajaxPromise('/auth/login', {
            email: utils.get('#email').value.trim(),
            password: utils.get('#password').value.trim()
        }, 'POST')
            .then((response) => {
                console.log(JSON.parse(response));
            }, (error) => {
                utils.hideLoading();
                const data = JSON.parse(error);
                utils.showModal('error', {content: data.message});
            });
    });
});

function validateLogin() {
    let valid = true;
    if (!utils.validateField(utils.get('#email'), ['mandatory'])) {
        valid = false;
    }
    if (!utils.validateField(utils.get('#password'), ['mandatory'])) {
        valid = false;
    }
    console.log(valid);
}
