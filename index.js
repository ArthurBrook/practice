/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

const jsName = "ECMAScript";
const userUnswer = prompt("Яка офіційна назва JavaScript?").trim();
    if (userUnswer === jsName) {
        alert ("Вірно!");
    }
    else {
        alert ("Не знаєте? ECMAScript!");
    }
