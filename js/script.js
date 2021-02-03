let money = 100000000;
let  income = 'проституция';
let  addExpenses = 'Реклама, Пиар, Аренда';
let  deposit = true;
let  mission = 400000000;
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

let amount1 = prompt('Во сколько это обойдется?');
console.log(amount1);
let amount2 = prompt('Во сколько это обойдется?');
console.log(amount2);

let budgetMonth = ();

