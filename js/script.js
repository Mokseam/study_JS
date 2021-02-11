'use strict'
let money = 30000; //доход за месяц
let  income = 'проституция';
let  addExpenses = 'Реклама, Пиар, Аренда';
let  deposit = true;
let  mission = 1000000000; //Цель
let  period = 3;
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log('В этих словах ' + addExpenses.length + ' символ');
console.log('Период равен ' + period  + ' месяцам' + ' и цель - заработать ' + mission + ' мильярдов BYNов');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split()); 
let budgetDay = money / 30;
console.log('вот столько будет в день зарабатываться ' + budgetDay);

money = prompt('Ваш месячный доход?', '500 ');

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = +prompt('Во сколько это обойдется?', '100');

let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = +prompt('Во сколько это обойдется?', '100');

let budgetMonth = money - (amount1 + amount2);
budgetMonth(Math.ceil);
console.log(`цель будет достигнута за ${Math.floor(budgetMonth) / 30} месяцев`);
if (budgetMonth != 0) {
    console.log("бюджет на месяц: " + budgetMonth);
    budgetDay = budgetMonth / 30;
    console.log("Бюджет на день " + Math.floor(budgetDay));
    if (budgetDay >= 1200){
        console.log('у вас высокий уровень дохода');
    } 
    else if((budgetDay >= 600) && (budgetDay < 1200)){
        console.log('У вас средний уровень дохода');
    } 
    else if((budgetDay < 600) && (budgetDay > 0)){
        console.log("Ваш доход ниже среднего");
    } 
    else if(budgetDay < 0){
        console.log("что-то пошло не так");
    }
}
else {
    console.log('Ошибка');
}
