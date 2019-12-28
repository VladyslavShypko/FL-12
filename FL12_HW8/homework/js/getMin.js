function getMin() {
    let sum = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        sum = arguments[i] < sum ? arguments[i] : sum;
    }
    return sum;
}

getMin(3, 0, -3);