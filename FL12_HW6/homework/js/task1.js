// Your code goes here

    let a = prompt('input a');
    let b = prompt('input b');
    let c = prompt('input c');

    if (+a && +b && +c || b === '0' || c === '0') {
        const two = 2;
        const four = 4;
        let d = b * b - four * a * c;
        let x1;
        let x2;
        if (d < 0) {
            console.log('no solution ( Discriminant < 0)');
        } else if (d === 0) {
            x1 = -b / (two * a);
            console.log('x = ' + x1);
        } else if (d > 0) {
            x1 = (-b + Math.sqrt(d)) / (two * a);
            x2 = (-b - Math.sqrt(d)) / (two * a);
            console.log('x1 = ' + x1 + '  ' + 'x2 = ' + x2);
        }
    } else {
        console.log('Invalid input data');
    }