// 1-е задание
let password = "Chuck-Chuck-Norris";
let verification = String(prompt("Введите прароль"));
alert(
  password === verification
    ? "Пароль введен верно"
    : "Пароль введен неправильно"
);
// конец

//2-е задание
let c = Number(prompt("Запишите любое число от 0 до 10"));
alert(c > 0 && c < 10 ? "Верно" : "Неверно");
//Конец

//3-е задание
let d = Number(prompt("Число для 1-й переменной"));
let e = Number(prompt("Число для 2-й переменной"));
alert(d > 100 || e > 100 ? "Верно" : "Неверно");
//Конец

//4-е задание
let a = "2";
let b = "3";
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));
//Конец

//5-е задание
let monthNumber = Number(prompt("Введите номер месяца"));

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Месяц соответствуе зимнему сезону');
        break;

    case 3:
    case 4:
    case 5:
        alert('Месяц соответствуе весеннему сезону');
        break;

    case 6:
    case 7:
    case 8:
        alert('Месяц соответствуе летнеиу сезону');
        break;

    case 9:
    case 10:
    case 11:
        alert('Месяц соответствуе осеннему сезону');
        break;

  default:
    alert('Неправильно введён номер месяца');
    break;
}
//Конец
