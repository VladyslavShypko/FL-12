function isLeapYear(inputDate) {
    let date = new Date(inputDate);
    if (+date) {
        return new Date(date.getFullYear(), 1, 29).getDate() === 29 ? `${date.getFullYear()} is a leap year` : 
        `${date.getFullYear()} is  not a leap year`;
    } else {
        return 'Invalid Date';
    }
}

isLeapYear('2020-01-01 00:00:00');