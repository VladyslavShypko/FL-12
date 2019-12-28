function makeNumber(string) {
    let result = '';
    for (let i in string) {
        if (parseInt(string[i]) || string[i] === '0') {
            result += string[i];
        }
    }
    return result;
}

function countNumbers(string) {
    let result = {};
    let numberFromString = makeNumber(string);

    numberFromString.split('').map(function (item) {
        result[item] = !result[item] ? 1 : result[item] + 1;
        return result[item];
    });
    return result;
}

countNumbers('erer384jj4444666888jfd123');