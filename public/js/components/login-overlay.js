import {utils} from "./utils.js";

export let loginOverlay = {
    showLogin: function () {
        utils.showModal('default', {
            header: 'Login',
            allow_closure: false,
            content: this.html,
            footer: [
                {name: 'Login', class: 'login-button-overlay is-success'}
            ]
        });
        utils.on('click', utils.get('.login-button-overlay'), function () {
            console.log('geklickt');
        });
    },
    html: '<div class="column"><label for="email">Email</label><input id="email" class="input is-primary" type="text" placeholder="Email address"></div><div class="column"><label for="password">Password</label><input id="password" class="input is-primary" type="password" placeholder="Password"></div>'
}
