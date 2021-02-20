'use strict'
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  function mainFunc() {
  let randomNumber = getRandomInt(1, 100);
  console.log('число, которое я загадал: ' + randomNumber);
  toFindNumber();

    function toFindNumber() {
    let number = +prompt("Угадай число от 1 до 100");
    let equal = number === randomNumber;
    if (number < 1 || number > 100 || isNaN(number)) {
        let result = confirm("Вы ввели неверное значение. Хотите продолжить или выйти?");
        if(result === true) {
            toFindNumber();
        }
        else if(result === false) {
            alert("Игра закончена");
            return
        }
    }

    if (number > randomNumber){
        alert("Загаданное число меньше");
    } 
    else if (number < randomNumber) {
        alert("Загаданное число больше");
    } 
    else if (equal) {
        confirm("Поздравляю, Вы угадали!");
    }
    return equal === true ? alert("Спасибо, что играли в меня") : toFindNumber();
};};

mainFunc();
