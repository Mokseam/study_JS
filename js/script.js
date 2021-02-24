'use strict'
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    sumExpenses: 0,
    addExpenses: ['Реклама', 'Пиар', 'Аренда'],
    deposit: true,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 5,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    asking: function(){

        if(confirm("Есть ли у вас дополнительный источник заработка?")){
            let itemIncome = prompt("какой у вас дополнительный заработок?", 
            "преподаю");
            
            console.log(typeof itemIncome);
            if(!isNaN(itemIncome)){
                while(!isNaN(itemIncome))
                {
                alert("Ошибка");
                itemIncome = prompt("какой у вас дополнительный заработок?",
                 "преподаю");
                }
            };
            let cashIncome = prompt("сколько в месяц зарабатываете?", 10000);
            appData.income[itemIncome] = cashIncome; //проверка
           
        };

        let n = 0;
        appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = appData.addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        do {
            let a = prompt('Введите обязательную статью расходов:'); //проверка
            let yop = (+prompt('Во сколько обойдется: ' + a));
            appData.expenses[a] = yop;
            n++;
        }
        while (n < 2);
        return appData.deposit;
    },
    methodExpensesMonth: function(){
        let summ = 0;
        for (let nadzeya in appData.expenses) {
            summ = summ + appData.expenses[nadzeya]; 
        }
        appData.sumExpenses = summ;
        console.log('Сумма месячных расходов: ' + appData.sumExpenses);
        return(appData.sumExpenses);
    },
    methodStart: function(){
        appData.budget = prompt('Ваш месячный доход?', '20000');
    },
    methodBudget: function(){
        appData.budgetMonth = appData.budget - appData.methodExpensesMonth();
        appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
    },
    getTargetMonth: function(){
        return appData.mission / appData.budgetMonth;
    },
    methodgetMissionAndAccumulatedMonth(){
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
            console.log("срок достижения цели " + (Math.ceil(appData.getTargetMonth()) + " месяцев"));
            }
            else {
                console.log('Цель не будет достигнута');
                console.log('У вас нет бюджета на день');
                
            };
    },
    methodGetStatusIncome: function(){
        return appData.income;
    },
    methodShowData: function(){
        console.log('Наша программа вкючает в себя данные: ');
        for (let nadz in appData) {
            console.log(nadz + " значение: " + appData[nadz]);
        };
    },

    getInfoDeposit: function(){
       if(appData.deposit){
           appData.percentDeposit = prompt("какой у вас годовой процент?", "10");
           appData.moneyDeposit = prompt("Какая сумма заложена?", 10000); //проверка
       }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    },
};
appData.asking();
appData.methodStart();
appData.methodBudget();
appData.methodgetMissionAndAccumulatedMonth();
appData.methodShowData();
