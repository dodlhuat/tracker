export let datepicker = {
    initDateAndTimePicker: (selector, options) => {
        return flatpickr(selector, {
            enableTime: true,
            dateFormat: "Y-m-d H:i",
            time_24hr: true,
            "locale": {
                "firstDayOfWeek": 1 // start week on Monday
            },
            onChange: function (selectedDates, dateStr, instance) {
                if (options.onChange !== undefined) {
                    options.onChange(selectedDates, dateStr, instance);
                }
            }
        });
    },
    initTimepicker: (selector) => flatpickr(selector, {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true
    }),
    initConnectedDateAndTimePicker(selector, timepicker) {
        const options = {
            onChange: (selectedDates, dateStr, instance) => {
                timepicker.clear();
                timepicker.set('minTime', selectedDates[0].getHours() + ':' + selectedDates[0].getMinutes());
            }
        }
        return this.initDateAndTimePicker(selector, options);
    }
}
