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
            if(itemIncome === ' ' || !isNaN(itemIncome))
            {
                while(!isNaN(itemIncome))
                {
                alert("Ошибка, вы ввели неверное значение");
                itemIncome = prompt("какой у вас дополнительный заработок?",
                 "преподаю");
                }
            };
            let cashIncome = prompt("сколько в месяц зарабатываете?", 10000);
            if(cashIncome === ' ' || isNaN(cashIncome)) {
                while(isNaN(cashIncome))
                {
                    alert("Ошибка, введите число");
                    cashIncome = prompt("сколько в месяц зарабатываете?", 10000);
                }
            }
            appData.income[itemIncome] = cashIncome; 
           
        };        
        
        let n = 0;
        appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'врачи', 'лекарства');
        appData.addExpenses = appData.addExpenses.replace(/(?:^|\s)(\S)/ug, m => m.toUpperCase());
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        do {
            let a = prompt('Введите обязательную статью расходов:', 'смазка');
            if(a === ' ' || !isNaN(a)) {
                while(!isNaN(a)) {
                    alert('Вы ввели неверное значение');
                    a = prompt('Введите обязательную статью расходов:', 'cмазка');
                }
            };
            let yop = (+prompt('Во сколько обойдется: ' + a, '1000'));
            if(yop === ' ' || isNaN(yop))
            while(isNaN(yop)) {
                    alert("Ошибка, введите число");
                    yop = (+prompt('Во сколько обойдется: ' + a, "1000"));
            }
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
        if(appData.budget === ' ' || isNaN(appData.budget))
        {
            while(isNaN(appData.budget)) {
                alert('Ошибка, введите число');
                appData.budget = prompt('Ваш месячный доход?', '20000');
            }
        }
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
           if(appData.percentDeposit === ' ' || isNaN(appData.percentDeposit))
           while(isNaN(appData.percentDeposit)){
               alert('ошибка, введите число');
               appData.percentDeposit = prompt("какой у вас годовой процент?", "10");
           };
           appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
           if(appData.moneyDeposit === ' ' || isNaN(appData.moneyDeposit))
           while(isNaN(appData.moneyDeposit)){
               alert('ошибка, введите число');
               appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
           };
       };
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

