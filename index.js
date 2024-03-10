// data we need from HTML:
// event name
// start date and end date
// whether or not to include weekends
// start time and end time (start time <= end time)
// save timezone

const eventName = document.getElementById("eventName");
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const includeWeekends = document.getElementById("includeWeekends");
const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const timezone = document.getElementById("timezone");




// data we need to create:
// number of days
partsOne = startDate.value.split("-");
var dateOne = new Date(partsOne[0], partsOne[1] - 1, partsOne[2]);
partsTwo = endDate.value.split("-");
var dateTwo = new Date(partsTwo[0], partsTwo[1] - 1, partsTwo[2]);

const diffTime = Math.abs(dateTwo - dateOne + 1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(diffDays);

// number of hours
const diffHours = endTime.value === startTime.value ? 24 : Number(endTime.value) - Number(startTime.value);
console.log(diffHours);
// number of div boxes to create
// we need div boxes for every half hour, for every day

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function checkSubmit() {
    if (eventName.value === "") {
        alert("Please enter an event name");
        return false;
    }
    else if (startDate.value === "") {
        alert("Please enter a start date");
        return false;
    }
    else if (endDate.value === "") {
        alert("Please enter an end date");
        return false;
    }
    else if (startTime.value === "") {
        alert("Please enter a start time");
        return false;
    }
    else if (endTime.value === "") {
        alert("Please enter an end time");
        return false;
    }
    // start date must be today or later
    else if (startDate.value < new Date().toISOString().split('T')[0]) {
        alert("Start date must be in the future");
        return false;
    }
    // start date must be earlier or equal to end date
    else if (startDate.value > endDate.value) {
        alert("Start date must be earlier or equal to end date");
        return false;
    }
    // start time must be earlier than or equal to end time
    else if (Number(startTime.value) > Number(endTime.value)) {
        alert("Start time must be earlier or equal to end time");
        return false;
    }
    else {
        // let id = makeid(12);
        // let url = "http://127.0.0.1:5502/index.html/" + id;
        // console.log(url)
        // window.location = url;
        return true;
    }
}

// steps:
// 1. get website domain
// 2. create new html page with personalised event name etc.
// 3. new html page should have name sign-in, which changes to box view
// 4. create div boxes with date and time labelled
// 5. div boxes allow gradients that are saved

