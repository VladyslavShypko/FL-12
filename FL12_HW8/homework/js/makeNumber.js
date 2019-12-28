function makeNumber(string) {
    let result = '';
    for (let i in string) {
        if (parseInt(string[i]) || string[i] === '0') {
            result += string[i];
        }
    }
    return result;
}

makeNumber('erer384jjjfd123');