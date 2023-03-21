import {utils} from "./utils.js";

export let dropdown = {
    init: function (selector) {
        if (utils.get(selector).length === 0) {
            console.error(selector + ' not found');
            return;
        }
        if (!utils.get(selector).classList.contains('tracker-dropdown')) {
            utils.get(selector).classList.add('tracker-dropdown')
            const options = utils.get(selector).getElementsByTagName('option');
            let html = '<div class="options-list hidden">';
            for (let option of options) {
                html += '<div class="option" data-value="' +  option.value + '">' +  option.textContent + '</div>';
            }
            html += '</div>';
            utils.get(selector).outerHTML += html;
        }

        utils.on('mousedown', utils.get(selector), function (event) {
            event.preventDefault();
            const options_list = utils.find(utils.get(selector).closest('.select'), '.options-list');
            options_list.classList.toggle('hidden');
        });

        utils.on('mouseleave', utils.find(utils.get(selector).closest('.select'), '.options-list'), function () {
            this.classList.add('hidden');
        });

        utils.on('click', utils.find(utils.get(selector).closest('.select'), '.options-list .option'), function () {
            utils.find(this.closest('.select'), 'select').value = this.dataset.value;
            // TODO: multi select?
            this.closest('.options-list').classList.add('hidden');
        });

        return utils.get(selector);
    }
}
