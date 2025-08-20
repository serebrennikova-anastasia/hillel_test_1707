//Опис ДЗ: Напишіть регулярний вираз, який знайде послідовність з шести або більше символів, 
// які не містять літери «А» (великої або малої)

//Приклад виконання:

//Повинен знаходити: Wonderful, Joyful

//Не повинен знаходити: Happiness, Time, Task, Apple

"use strict";
var text = "Wonderful Happiness Joyful Time Task Apple";

var re = /\b[^aA]{6,}\b/g;

var matches = text.match(re);

console.log(matches); 
