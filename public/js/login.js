import {utils} from "./utils.js";
import {api} from "./api.js";

utils.contentLoaded(function () {
    // utils.cache('tracker-token', '2|s1qbPJZUVfASxrWHNN6axf9axYRNNMx2EOQP9yf5')
    // utils.cache('tracker-token', '3|s1qbPJZUVfASxrWHNN6axf9axYRNNMx2EOQP9yf5')
    console.log(utils.cache('tracker-token'));

    api.checkToken().then((logged_in) => {
        console.log(logged_in);
        if (logged_in) {
            // forward to index page
            utils.forward('index.html');
        }
    })

    utils.on('click', utils.get('.submit-login'), function () {
        validateLogin();
        utils.showLoading();
        api.ajaxPromise('/auth/login', {
            email: utils.get('#email').value.trim(),
            password: utils.get('#password').value.trim()
        }, 'POST')
            .then((response) => {
                const data = JSON.parse(response);
                if (data.status) {
                    utils.cache('tracker-token', data.token);
                }
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
