import {utils} from "./utils.js";

export let navbar = {
    html: '<nav class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation"><div class="navbar-brand"><a class="navbar-item" href="https://bulma.io">TRACKER</a><a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></a></div></nav>',
    init: () => {
        utils.get('.navbar-container').innerHTML = navbar.html;
    }
}
