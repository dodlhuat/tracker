import {utils} from "../components/utils.js";
import {api} from "../components/api.js";

utils.contentLoaded(function () {
    api.checkToken().then((logged_in) => {
        if (logged_in) {
            // forward to index page
            utils.forward('index.html');
        }
    });

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
