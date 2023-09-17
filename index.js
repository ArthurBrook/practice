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

const max = 50;
const min = 23;

for (let i = max; i >= min; i -= 1) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}
