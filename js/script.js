'use strict'
let appData = {
    income: "проституция",
    addIncome: [],
    expenses: {},
    sumExpenses: 0,
    addExpenses: ['Реклама', 'Пиар', 'Аренда'],
    deposit: true,
    mission: 50000,
    period: 5,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let n = 0;
        appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = appData.addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        do {
            let a = prompt('Введите обязательную статью расходов:');
            let yop = (+prompt('Во сколько обойдется: ' + a));
            appData.expenses[a] = yop;
            n++;
        }
        while (n < 2);

        return appData.deposit;
    }
};

appData.asking();

function getExpensesMonth() {
    var summ = 0;
   for (var nadzeya in appData.expenses) {
       summ = summ + appData.expenses[nadzeya]; 
   }
   appData.sumExpenses = summ;
   console.log('Сумма месячных расходов: ' + appData.sumExpenses);
   return(appData.sumExpenses);
}

function start() {
    appData.budget = prompt('Ваш месячный доход?', '500 ');
};

function getBudget() {
    appData.budgetMonth = appData.budget - appData.sumExpenses;
    appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
};

function getTargetMonth() {
    return appData.mission / appData.budgetMonth;
};

function accumulatedDay(dildakSlona) {
    return dildakSlona / 30;
};

function getStatusIncome() {
 return appData.income;
};
function getMissionAndAccumulatedMonth() {
    if (appData.budgetMonth != 0) {
        if (appData.budgetDay >= 1200){
            console.log('У вас высокий уровень дохода');
        } 
        else if((appData.budgetDay >= 600) && (appData.budgetDay < 1200)){
            console.log('У вас средний уровень дохода');
        } 
        else if((appData.budgetDay < 600) && (appData.budgetDay > 0)){
            console.log('у вас низкий уровень дохода');
        } 
        else if(appData.budgetDay <= 0){
            console.log('что-то пошло не так');
        }
    }
    else {
        console.log('Ошибка');
    };

    if (appData.budgetMonth > 0){
        console.log("срок достижения цели " + Math.ceil(appData.methodGetTargetMonth()) + " месяцев");
        }
        else {
            console.log('Цель не будет достигнута');
            console.log('У вас нет бюджета на день');
            
        };
}

appData.methodExpensesMonth = getExpensesMonth;
appData.methodBudget = getBudget;
appData.methodGetTargetMonth = getTargetMonth;
appData.methodGetStatusIncome = getStatusIncome;

start();
appData.methodExpensesMonth();
appData.methodBudget();
getMissionAndAccumulatedMonth();

console.log('Наша программа вкючает в себя данные: ');
for (var nadzeya in appData) {
    console.log(nadzeya + " значение: " + appData[nadzeya]);
};