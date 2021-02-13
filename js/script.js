'use strict'
let money = 30000; //доход за месяц
let  income = 'проституция';
let  addExpenses = 'Реклама, Пиар, Аренда';
let  deposit = true;
let  mission = 100000; //Цель
let  period = 3;
let showTypeOf = function(data) {
    console.log(typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(addExpenses.split()); 
let budgetDay = money / 30;

money = prompt('Ваш месячный доход?', '500 ');

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

deposit = confirm('Есть ли у вас депозит в банке?');

// let expenses1 = prompt('Введите обязательную статью расходов');
// let amount1 = +prompt('Во сколько это обойдется?', '100');

// let expenses2 = prompt('Введите обязательную статью расходов');
// let amount2 = +prompt('Во сколько это обойдется?', '100');
// ===============================================================
let n = 0;
let sum = 0;
let expenses = " ";
function start() {
    do {
        expenses = prompt('Введите обязательную статью расходов:');
        sum = sum + (+prompt('Во сколько обойдется: ' + expenses));
        n++;
    }
    while (n < 2);
};
start();
// ===============================================================


if (getAccumulatedMonth() != 0) {
    budgetDay = getAccumulatedMonth() / 30;
    if (budgetDay >= 1200){
        console.log('У вас высокий уровень дохода');
    } 
    else if((budgetDay >= 600) && (budgetDay < 1200)){
        console.log('У вас средний уровень дохода');
    } 
    else if((budgetDay < 600) && (budgetDay > 0)){
        console.log('у вас низкий уровень дохода');
    } 
    else if(budgetDay <= 0){
        console.log('что-то пошло не так');
    }
}
else {
    console.log('Ошибка');
};

function getExpensesMonth(n){
return !isNaN(parseFloat(n)) && isFinite(n)
}
console.log(getExpensesMonth(sum));

// сумма расходов

function getAccumulatedMonth() {
    return money - sum;
};
// Накопления за месяц

var accumulatedMonth = getAccumulatedMonth(); // присваивание переменной значение функции

function getTargetMonth(jopaSlona, srakaMuravya) {
    return jopaSlona / srakaMuravya;
};

if (accumulatedMonth > 0){
console.log("срок достижения цели " + Math.ceil(getTargetMonth(mission, accumulatedMonth)) + " месяцев");
budgetDay = accumulatedDay(accumulatedMonth);
console.log("Бюджет на день " + Math.ceil(budgetDay));
}
else {
    console.log('Цель не будет достигнута');
    console.log('У вас нет бюджета на день');
    
}
function accumulatedDay(dildakSlona) {
    return dildakSlona / 30;
};

function getStatusIncome(data) {
    return data;
};
console.log(getStatusIncome(income));
