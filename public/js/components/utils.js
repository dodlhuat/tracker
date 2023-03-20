export let utils = {
    translations: [],
    contentLoaded: function (readyFunction) {
        document.addEventListener("DOMContentLoaded", readyFunction);
    },
    showPageLoading: function () {
        console.log('show page loading');
    },
    hidePageLoading: function () {
        console.log('hide page loading');
    },
    get: function (selector) {
        const elements = document.querySelectorAll(selector);
        if (elements.length === 1) return elements[0];
        return elements;
    },
    find: function (element, selector) {
        const elements = element.querySelectorAll(selector);
        if (elements.length === 1) return elements[0];
        return elements;
    },
    on: function (action, element, callback) {
        if (element instanceof NodeList) {
            for (let i = 0; i < element.length; i++) {
                element[i].removeEventListener(action, callback);
                element[i].addEventListener(action, callback);
            }
        } else {
            element.removeEventListener(action, callback);
            element.addEventListener(action, callback);
        }
    },
    showModal: function (type, parameters) {
        if (this.get('.modal').length === 0) {
            this.get('.append').innerHTML += this.modal;

            const utils = this;
            this.on('click', this.get('.modal-card-head .delete'), function () {
                utils.hideModal();
            })
        }
        let classname = undefined;
        switch (type) {
            case 'error':
                classname = 'is-danger';
                break;
            case 'warning':
                classname = 'is-warning';
                break;
            case 'info':
                classname = 'is-info';
                break;
            case 'success':
                classname = 'is-success';
                break;
        }
        this.get('.modal').classList.add('is-active');
        if (parameters.content !== undefined) {
            this.get('.modal-card-body').innerHTML = parameters.content;
        }
        if (parameters.allow_closure !== undefined && parameters.allow_closure === false) {
            this.get('.modal-card-head .delete').classList.add('hidden');
        }
        if (parameters.header !== undefined) {
            this.get('.modal-card-title').innerHTML = parameters.header;
        }
        if (parameters.footer !== undefined) {
            let html = '';
            parameters.footer.forEach(function (button) {
                html += '<button class="button ' + button.class + '">' + button.name + '</button>';
            });
            this.get('.modal-card-foot').innerHTML = html;
        }
        if (classname !== undefined) {
            this.get('.modal-card').classList.add(classname);
        }
    },
    hideModal: function () {
        this.get('.modal').classList.remove('is-active');
    },
    showLoading: function () {
        if (this.get('.pageloader').length === 0) {
            this.get('.append').innerHTML += this.loader;
        }
        this.get('.pageloader').classList.add('is-active');
    },
    hideLoading: function () {
        this.get('.pageloader').classList.remove('is-active');
    },
    modal: '<div class="modal"><div class="modal-background"></div><div class="modal-card"><header class="modal-card-head"><p class="modal-card-title">Modal title</p><button class="delete" aria-label="close"></button></header><section class="modal-card-body"></section><footer class="modal-card-foot"></footer></div></div>',
    loader: '<div class="pageloader"><span class="title">loading</span></div>',
    toggleDarkMode: function () {
        if (this.get('body').classList.contains('dark')) {
            this.get('body').classList.remove('dark');
        } else {
            this.get('body').classList.add('dark');
        }
    },
    translate: function (string) {
        if (this.translations[string] !== undefined) {
            return this.translations[string];
        } else {
            return string;
        }
    },
    forward: function (url) {
        window.location.replace(url);
    },
    cache: function (key, value) {
        if (value !== undefined) {
            localStorage.setItem(key, value);
        } else {
            value = localStorage.getItem(key);
        }
        return value;
    },
    validateField: function (field, validation = ['mandatory']) {
        field.classList.remove('has-error');
        if (validation.includes('mandatory')) {
            if (field.value.trim() === '') {
                field.classList.add('has-error');
                return false;
            }
        }
    }
}

