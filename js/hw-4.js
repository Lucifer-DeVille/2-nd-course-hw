// 1-е задание
for(let i=0; i<2; i++) {
    console.log('Привет');
}
// конец

//2-е задание
for(let a=1; a<=5; a++) {
    console.log(a);
}
//Конец

//3-е задание
for(let b=7; b<=22; b++) {
    console.log(b);
}
//Конец

//4-е задание
const obj = {
    Коля : '200',
    Вася : '300',
    Петя : '400',
}
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
//Конец

//5-е задание
let num = 0;
let n = 1000;
while (n>=1 && n<50) {
    n /=2
    num++
    console.log(n, num);
}
//Конец

//6-е задание
let numberFriday = Number(prompt('Введите число первой пятницы месяца'));

if (numberFriday>=1 && numberFriday<=7) {
    while (numberFriday>=1 && numberFriday<=31) {
        numberFriday +=7
        if (numberFriday>=31) {
            break;
        }
        alert(`Сегодня пятница, ${numberFriday}-е число. Необходимо подготовить отчет.`);
    }
} else {
    alert ('Введите корректное число первой пятницы месяца');
}

//Конец