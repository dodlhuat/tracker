import {utils} from "../components/utils.js";
import {api} from "../components/api.js";
import {dropdown} from "../components/dropdown.js";
import {navbar} from "../components/navbar.js";
import {animate} from "../components/animate.js";

utils.contentLoaded(function () {
    api.checkToken().then((logged_in) => {
        // logged_in returning true or false
    });
    navbar.init();

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

    let tracking_type = dropdown.init('select#tracking-type');

    utils.on('click', utils.get('.add-tracking'), () => {
        // timestamp: datetimepicker.selectedDates[0].valueOf()
        console.log(timepicker.selectedDates);
        console.log(tracking_type.value);
    });
});

