import {utils} from "../components/utils.js";
import {api} from "../components/api.js";
import {dropdown} from "../components/dropdown.js";
import {navbar} from "../components/navbar.js";
import {TrackingType} from "../models/TrackingType.js";
import {User} from "../models/User.js";
import {datepicker} from "../components/datepicker.js";

utils.contentLoaded(function () {
    api.checkToken().then((logged_in) => {
        // logged_in returning true or false
    });
    navbar.init();

    let tracking_types = [];
    let tracking_type = undefined;
    api.all(TrackingType).then((response) => {
        const data = JSON.parse(response);
        data.forEach((element) => {
            tracking_types.push(new TrackingType(element.name, element.id));
        });
        utils.fillDropdown(utils.get('#tracking-type'), tracking_types);
        tracking_type = dropdown.init('#tracking-type');
    });

    // so schaut filtern aus :)
    api.filter(User, {firstname: {'=': 'Andi'}, lastname: {'=': 'Gruber'}}).then((response) => {
        console.log(response);
    })

    let timepicker = datepicker.initTimepicker('.time-picker');
    let datetimepicker = datepicker.initConnectedDateAndTimePicker('.datetime-picker', timepicker)

    utils.on('click', utils.get('.add-tracking'), () => {
        // timestamp: datetimepicker.selectedDates[0].valueOf()
        console.log(datetimepicker.selectedDates[0].valueOf());
        console.log(timepicker.selectedDates);
        console.log(tracking_type.value);
    });
});

