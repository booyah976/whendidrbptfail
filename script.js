last_fail = a;

let timer = document.getElementById("answer");


function updateTimer(last_fail) {
    let sec_passed = (Date.now() - last_fail) / 1000;
    let days = Math.floor(sec_passed / (60 * 60 * 24));
    let hours = Math.floor((sec_passed % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((sec_passed - days * 24 * 60 * 60 - hours * 60 * 60) / 60);
    let seconds = Math.floor(sec_passed - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);

    //im too braindead to do something smart for this
    // let _ = [days, hours, minutes, seconds]
    // _ = _.map()

    days = days.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    hours = hours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    minutes = minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    seconds = seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

    return (`${days}:${hours}:${minutes}:${seconds} ago`);
}

let calendar2022 = ['BHR', 'SAU', 'AUS', 'EMI', 'MIA', 'ESP', 'MON', 'AZE', 'CAN', 'GBR', 'AUT', 'FRA', 'HUN', 'BEL', 'NED', 'ITA', '', 'SIN', 'JPN', 'USA', 'MXC', 'SAP', 'ABU']
let failures = {
    'BHR': 3,
    'SAU': 1,
    'AUS': 1,
    'MIA': 1,
}


function createBoxes(parent) {
    for (let i = 0; i <= 22; i += 1) {
        let div = document.createElement("div");
        div.id = "Race" + String(i);
        div.className = "race-box"
        div.textContent = calendar2022[i];

        if (calendar2022[i] in failures) {
            div.style.color = "red";
        } else {
            div.style.color = "green";
        }

        if (i > 6) {
            div.style.color = "grey";
        }

        parent.appendChild(div);
    }
}


function populateTable(incidents, table) {
    incidents.forEach(element => {
        let row = document.createElement("tr");
        row.id = element["sno"];
        row.className = "history-row";
        row.innerHTML = `
                    <td>${element["sno"]}</td>
                    <td>${element["driver"]}</td>
                    <td>${element["team"]}</td>
                    <td>${element["race"]}</td>
                    <td>${element["video"]}</td>
                    <td>${element["cause"]}</td>`;
        table.appendChild(row);
    });
}

raceBoxes = document.getElementById("race-boxes");
createBoxes(raceBoxes);

table = document.getElementById("history-table");
populateTable(incidents, table)

setInterval(function () {
    timer.textContent = updateTimer(last_fail);
}, 200);