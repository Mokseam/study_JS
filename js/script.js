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

money = prompt('Ваш месячный доход?');
console.log(money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses);

deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let expenses1 = prompt('Введите обязательную статью расходов');
console.log(expenses1);
let expenses2 = prompt('Введите обязательную статью расходов');
console.log(expenses2);

let amount1 = +prompt('Во сколько это обойдется?');
console.log(amount1);
let amount2 = +prompt('Во сколько это обойдется?');
console.log(amount2);

let budgetMonth = money - amount1;
budgetMonth = budgetMonth - amount2;
console.log(budgetMonth);

budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay));

mission = mission / budgetMonth;
console.log(Math.ceil(mission));
if (budgetDay >= 1200){
console.log('у вас высокий уровень дохода');
} else if(budgetDay >= 600 & budgetDay < 1200){
    console.log('К сожалению у вас уровень дохода ниже среднего');
}   else if(budgetDay < 600 & budgetDay > 0){
console.log("у вас слабый доход");
}
    else if(budgetDay < 0){
        console.log("что-то пошло не так");
    }
