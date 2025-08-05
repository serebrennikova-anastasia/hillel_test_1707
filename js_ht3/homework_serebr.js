"use strict";

function pow(x, y) { 
    if (typeof  x !== 'number' || typeof y !== 'number') {
        return('має бути число ');
    }   
    if (y < 0) {
        return ('негативна ступінь');
    }
    if (y % 1 !== 0) {
        return "Помилка: ступінь має бути цілим числом";
    }
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    } 
    return result;
}

// console.log(pow(2, "3")); має бути число
// console.log(pow(2, -3)); негативна ступінь
// console.log(pow(2, 3.5)); Помилка: ступінь має бути цілим числом
//console.log(pow(2, 6)); 64
console.log(pow(5, 2));  // 25