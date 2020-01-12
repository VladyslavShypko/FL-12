
function convert() {
    let i;
    let result = [];
    for (i = 0; i < arguments.length; i++) {
        parseInt(arguments[i]) === arguments[i] ? result.push(`${arguments[i]}`) : result.push(parseInt(arguments[i]));
    }
    return result;
}

function executeforEach(array, callback) {
    for (let el of array) {
        callback(el);
    }
}

function mapArray(array, callback) {
    let result = [];

    function myFunction(el) {
        result.push(callback(+el));
    }
    executeforEach(array, myFunction);
    return result;
}

function filterArray(array, callback) {
    let result = [];

    function myFunction(el) {
        callback(el) ? result.push(el) : '';
    }
    executeforEach(array, myFunction);
    return result;
}

function flipOver(string) {
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}

function makeListFromRange(range) {
    let result = [];
    for (let i = range[0]; i <= range[1]; i++) {
        result.push(i);
    }
    return result;
}

function getArrayOfKeys(array, key) {
    let result = [];

    function myFunction(el) {
        result.push(el[`${key}`]);
    }
    executeforEach(array, myFunction);
    return result;
}

function substitute(array) {
    const MIN = 30;
    return mapArray(array, el => el >= MIN ? el : '*');
}

function getPastDay(date, dayNumber) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - dayNumber).getDate();
}

function formatDate(date) {
    function formatTime(time) {
        return `${time}`.length > 1 ? time : `0${time}`;
    }
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}` +
        ` ${formatTime(date.getHours())}:${formatTime(date.getMinutes())}`;
}