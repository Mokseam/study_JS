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

let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = +prompt('Во сколько это обойдется?', '100');

let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = +prompt('Во сколько это обойдется?', '100');



if (getAccumulatedMonth() != 0) {
    budgetDay = getAccumulatedMonth() / 30;
    if (budgetDay >= 1200){
    } 
    else if((budgetDay >= 600) && (budgetDay < 1200)){
    } 
    else if((budgetDay < 600) && (budgetDay > 0)){
    } 
    else if(budgetDay < 0){
    }
}
else {
    console.log('Ошибка');
};

function getExpensesMonth(){
return(amount1 + amount2);
}; 
console.log(getExpensesMonth());
// сумма расходов

function getAccumulatedMonth() {
    return money - (amount1 + amount2);
};
// Накопления за месяц

var accumulatedMonth = getAccumulatedMonth(); // присваивание переменной значение функции

function getTargetMonth(jopaSlona, srakaMuravya) {
    return jopaSlona / srakaMuravya;
};

console.log("срок достижения цели " + Math.ceil(getTargetMonth(mission, accumulatedMonth)) + " месяцев");

function accumulatedDay(dildakSlona) {
    return dildakSlona / 30;
};

budgetDay = accumulatedDay(accumulatedMonth);

console.log("Бюджет на день " + budgetDay);

function getStatusIncome(data) {
    return data;
};
console.log(getStatusIncome(income));
