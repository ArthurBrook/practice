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

// const userInp = prompt("Введіть число:");
// const hours = Math.floor(userInp / 60)
//   .toString()
//   .padStart(2, "0");
// const min = (userInp % 60).toString().padStart(2, "0");

// console.log(`${hours}:${min}`);

/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
 */

// let userInput = prompt('Введіть число');
// let total = 0;

// do {
// 	if (userInput !== null) {
// 		total += Number(userInput);
// 		userInput = prompt('Введіть число');
// 	}
// } while (userInput !== null);

// alert(`Загальна сума введених чисел дорівнює ${total}.`);

/**
 *? Записати масив, const arr = ['BEST', 'the', 'foo', 'is', 'JS' ]
 *? розвернути масив,
 *? вирізати foo,
 *? перевести його в рядок розділений пробілами
 *? Очікуваний результат "JS id the BEST"
 */

/* массив arr не має мутуватися */

const arr = ['BEST', 'the', 'foo', 'is', 'JS'];
// const copyArr = arr.slice();
// copyArr.splice(copyArr.indexOf('foo'), 1);
// const string = copyArr.reverse().join(' ');
// console.log(string);

// const string = arr
//   .slice(0, arr.indexOf('foo'))
//   .concat(arr.slice(arr.indexOf('foo') + 1))
//   .reverse()
//   .join(' ');
// console.log(string);

/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */

// const someObj = {
//   worker1: 360,
//   worker2: 750,
//   worker3: 240,
// };

// function culcSalary(obj) {
//   const values = Object.values(obj);
//   let totalResult = 0;

//   for(const value of values) {
//     totalResult += value;
//   }

//   return totalResult;
// }

// const number = culcSalary(someObj);
// console.log(number)

///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// function apdateFrutes(arr) {
//   const apdateFrute = arr.map((frute, index) => ({
//     ...frute,
//     price: frute.price * 0.8,
//     id: index + 1,
//   }));
//   console.log(apdateFrute);
// }

// apdateFrutes(fruits);

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tennis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`Key: ${key}`);
// }

// *? З об'єкту concerts потрібно отримати масив
//  *? в якому будуть лише імена міст.
//  *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
//  *? відсортувати їх у хронологічному порядку.
//  *? Результат вивести у консоль.
//  *? Очікуваний результат ["Одеса", "Умань", "Харків"]
//  */
const concerts = {
  Київ: new Date('2020-04-01'),
  Умань: new Date('2025-07-02'),
  Вінниця: new Date('2020-04-21'),
  Одеса: new Date('2025-03-15'),
  Хмельницький: new Date('2020-04-18'),
  Харків: new Date('2025-07-10'),
};

const cities = Object.keys(concerts);
const noConcertCity = cities.filter(city => concerts[city] > new Date());
noConcertCity.sort((a, b) => concerts[a] - concerts[b]);
console.log(noConcertCity);
