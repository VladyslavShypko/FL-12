// Your code goes here

let a = prompt('input a');
let b = prompt('input b');
let c = prompt('input c');

if (+a && +b && +c || a === '0' || b === '0' || c === '0') {
    if (Math.sign(a) !== 1 && Math.sign(b) !== 1 && Math.sign(c) !== 1) {
        alert('A triangle must have 3 sides with a positive definite length ');

    } else if (parseInt(a) === parseFloat(a) && parseInt(b) === parseFloat(b) && parseInt(c) === parseFloat(c)) {

        a = +a;
        b = +b;
        c = +c;

        if (b + c > a && b + a > c && a + c > b) {
            if (a === b && b === c && a === c) {
                alert('Equilateral triangle');
            } else if (a === b || b === c || c === a) {
                alert('Isosceles triangle');
            } else {
                alert('Scalene triangle');
            }

        } else {
            alert('Triangle doesn’t exist');
        }
    }

} else {
    alert('input values should be ONLY numbers');
}
