last_fail = 1649570700000;

let timer = document.getElementById("answer");


function updateTimer(last_fail) {
    let sec_passed = (Date.now() - last_fail) / 1000;
    let days = Math.floor(sec_passed / (60 * 60 * 24));
    let hours = Math.floor((sec_passed % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((sec_passed - days * 24 * 60 * 60 - hours * 60 * 60) / 60);
    let seconds = Math.floor(sec_passed - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);

    //im too braindead to do something smart for this
    days = days.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    hours = hours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    minutes = minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    seconds = seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

    return (`${days}:${hours}:${minutes}:${seconds} ago`);
}

setInterval(function () {
    timer.textContent = updateTimer(last_fail);
}, 200);