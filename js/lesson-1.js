"use strict";

// ===== num_1 =====
let tc = prompt("Введите температуру в градусах по Цельсию");
let tf = (9 / 5) * tc + 32;
alert(`Температура в градусах по Фаренгейту: ${tf}`);

// ===== num_2 =====
let name = "Василий";
let admin = name;
console.log(admin);

// ===== num_3 =====
console.log(10 + 10 + "10");
console.log(10 + "10" + 10);
console.log(10 + 10 + +"10");
console.log(10 / -"");
console.log(10 / +"2,5");

/*
1. сначала складываем, получаем 20 + "10". т.к в выражении один из операндов строка, то другой операнд тоже станет строкой, т.к не явное 
приведение типа. потом происходит конкатинация => 2010

2. т.к в выражении один из операндов строка, то другие операнды тоже станут строками, т.к не явное 
приведение типа. потом происходит конкатинация => 101010

3. сначала складываем, получаем 20 + +"10". перед правым операндом стоит унарный плюс => строка стала числом => 20 + 10 = 30

4. т.к перед правым операндом стоит унарный минус, то правый операнд стал отрицательным числом, а т.к это была пустая строка, то операнд 
будет равен -0. когда мы делим на -0, то получаем -Infinity

5. т.к правый операнд не число, то при деление получаем NaN
*/