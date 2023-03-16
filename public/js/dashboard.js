import {utils} from "./utils.js";
import {api} from "./api.js";
import {dropdown} from "./dropdown.js";

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

    dropdown.init('select#select');
});

