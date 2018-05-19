let clock;
let timezoneSelect;
let timeOutputElement;

document.addEventListener("DOMContentLoaded", function (event) {
    timezoneSelect = document.getElementById('timezone-select');
    timeOutputElement = document.getElementById('timer-time');

    clock = new Clock((time) => updateTime(time));

    timezoneSelect.onchange = changeTimezone;
});

function updateTime(time) {
    let timeFormatted = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}`;
    timeOutputElement.innerText = timeFormatted;
}

function changeTimezone(event) {
    let timezoneLocation = timezoneSelect.options[timezoneSelect.selectedIndex].value;
    let [n, e] = timezoneLocation.split(',');
    clock.setLocation(n, e, () => {}, () => alert('Unable to get timezone data.'));
}