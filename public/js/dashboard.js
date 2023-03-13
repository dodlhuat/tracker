import {utils} from "./utils.js";
import {api} from "./api.js";

utils.contentLoaded(function () {
    // datetime picker
    let datetimepicker = flatpickr('.datetime-picker', {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        time_24hr: true,
        "locale": {
            "firstDayOfWeek": 1 // start week on Monday
        },
        onChange: function(selectedDates, dateStr, instance) {
            // set start time for end-time-picker
            timepicker.clear();
            timepicker.set('minTime', selectedDates[0].getHours() + ':' + selectedDates[0].getMinutes());
        }
    });

    let timepicker = flatpickr('.time-picker', {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true
    });

    utils.on('click', utils.get('.show-input'), function () {
        console.log(utils.get('.text-input').value);
    })

    utils.on('click', utils.get('.show-area'), function () {
        console.log(utils.get('.text-area').value);
    })

    utils.on('click', utils.get('.show-select'), function () {
        console.log(utils.get('#select').value);
    })

    utils.on('click', utils.get('.set-values'), function () {
        utils.get('.text-input').value = 'gesetzt';
        utils.get('.text-area').value = 'gesetzt';
        utils.get('#select').value = 2;
    });

    utils.on('click', utils.get('.check-token'), function () {
        api.checkToken();
    });

    // simple ajax request
    // var success = function(response) {
    //     console.log(response);
    // }
    // utils.ajax('http://127.0.0.1:8000/api/auth/login', success, 'POST')
});

