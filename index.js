/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

// const jsName = "ECMAScript";
// const userUnswer = prompt("Яка офіційна назва JavaScript?").trim();
// if (userUnswer === jsName) {
//     alert("Вірно!");
// }
// else {
//     alert("Не знаєте? ECMAScript!");
// }

/**
 *? Напишіть цикл, який виводить у консоль
 *? всі парні числа  від max до min  за спаданням
 */

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
// }

/*
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 */

/* 
1 Створити змінну промпт від користувача
2 Створити змінну для годин та хвилин
3 Перевести хвилини у години
4 Вивести у консоль результат
*/

const userInp = prompt("Введіть число:");
const hours = Math.floor(userInp / 60)
  .toString()
  .padStart(2, "0");
const min = (userInp % 60).toString().padStart(2, "0");

console.log(`${hours}:${min}`);
