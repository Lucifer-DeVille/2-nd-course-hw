//Генератор случайного числа от 0 до 100
function randomInteger(min, max) {
  let rand = min + Math.floor(Math.random() * (max - min + 1));
  return rand;
}
//

//Событие клика и вызов функции сравнения заданного и угаданного числа, которой заранее задаются значения переменных
document.getElementById("guessNumber").onclick = function () {
  let randomNumber = randomInteger(0, 100);
  let yourNumber = Number(
    prompt("Задано число от 0 до 100, попробуйте его угадать")
  );

  guessTheNumber(yourNumber, randomNumber);
};
//

//Функция сравнения, где уже заданы рандомное число и число пользователя
function guessTheNumber(yourNumber, randomNumber) {
  let attempts = 0;
  let guessed = false;

  if (yourNumber >= 0 && yourNumber <= 100) {
    do {
      attempts++;

      if (yourNumber < randomNumber) {
        yourNumber = Number(
          prompt("Ваше число меньше заданного, попробуйте ещё")
        );
      } else if (yourNumber > randomNumber) {
        yourNumber = Number(
          prompt("Ваше число больше заданного, попробуйте ещё")
        );
      } else {
        guessed = true;
        alert(
          `Поздравляю! Вы угадали число ${randomNumber} за ${attempts} попыток`
        );
      }
    } while (!guessed);
  } else {
    alert("Вы ввели недопустимое значение, начните игру заново");
  }
}
//

//1-е задание
let smallerNumber = (a, b) => {
  let result = 0;

  if (a < b) {
    return (result = a);
  } else if (a > b) {
    return (result = b);
  } else {
    return (result = a);
  }
};

console.log(smallerNumber(4, 7));
console.log(smallerNumber(6, 2));
console.log(smallerNumber(9, 9));
//

//2-е задание
let evenNumber = (number) => {
  return number % 2 === 0 ? "Число четное" : "Число нечётное";
};

console.log(evenNumber(5));
console.log(evenNumber(8));
//

//3-е задание
//1-ая функция
let squareNumberConsol = (a) => {
  let result = a * a;
  console.log(`Квадрат числа первой функции равен ${result}`);
};

squareNumberConsol(4);

//2-ая функция
let squareNumberReturn = (a) => {
  return (a *= a);
};

let square = squareNumberReturn(6);
console.log(`Квадрат числа второй функции равен ${square}`);
//

//4-е задание
let howAge = () => {
  let age = Number(prompt("Сколько вам лет?"));

  if (age < 0) {
    alert("Вы ввели неправильное значение");
  } else if (age >= 0 && age <= 12) {
    alert("Привет, друг!");
  } else {
    alert("Добро пожаловать!");
  }
};

howAge();
//

//5-е задание
let multiNumber = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return "Одно или оба значения не являются числом";
  } else {
    return a * b;
  }
};

console.log(multiNumber("fuck", "fuck"));
console.log(multiNumber(3, 222));
//

//6-е задание
let cubeNumber = () => {
  let n = Number(prompt("Введите число для возведения в куб"));

  if (isNaN(n)) {
    return "Переданный параметр не является числом";
  } else {
    return `n в кубе равняется ${Math.pow(n, 3)}`;
  }
};

alert(cubeNumber());
//

//7-е задание
const circle1 = {
  radius: 5,
  getArea() {
    return Math.PI * this.radius * this.radius;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
};

const circle2 = {
  radius: 8,
  getArea() {
    return Math.PI * this.radius * this.radius;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
};

console.log(`Площадь 1-го круга равна ${circle1.getArea()}`);
console.log(`Периметр 1-го круга равен ${circle1.getPerimeter()}`);

console.log(`Площадь 2-го круга равна ${circle2.getArea()}`);
console.log(`Периметр 2-го круга равен ${circle2.getPerimeter()}`);
//
