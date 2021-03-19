'use strict'
let start = document.getElementById('start');
let btnPlus = document.getElementsByTagName('button');
let incomePlus = btnPlus[0];
let expensesPlus = btnPlus[1];
let depositCheck = document.querySelector('#deposit-check');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let budgetValue = document.getElementsByClassName('result-total')[0];
let expensesMonth = document.getElementsByClassName('result-total')[1];
let additionalIncome = document.getElementsByClassName('result-total')[2];
let additionalExpenses = document.getElementsByClassName('result-total')[3];
let incomePeriod = document.getElementsByClassName('result-total')[4];
let targetMonth = document.getElementsByClassName('result-total')[5];
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll(".expenses-items");
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');

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
                };
            };
            appData.income[itemIncome] = cashIncome; 
           
        };        
        let n = 0;
        //appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        //appData.addExpenses = appData.addExpenses.split('')[0].toUpperCase() + appData.addExpenses.slice(1);
        let str = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        let strArr = str.split(', ');
        let upperStrArr = [];
        for (let i = 0; i < strArr.length; i++) {
        upperStrArr.push(strArr[i][0].toUpperCase() + strArr[i].slice(1));
        };
        appData.addExpenses = upperStrArr.join(' ');

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
            };
            appData.expenses[a] = yop;
            n++;
        }
        while (n < 2);
        return appData.deposit;
    },
    getExpenses: function() {
expensesItems.forEach(function(item){
    let itemExpenses = item.querySelector(".expenses-title").value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if(itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
    };
});
    },
    addExpensesBlock: function(){
        
        console.log(expensesItems.parentNode);
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');

        if(expensesItems.length === 3) {
            expensesPlus.style.display = "none";
        };
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
        if(salaryAmount.value === '' || isNaN(salaryAmount.value)) 
        {
            while(isNaN(salaryAmount.value) || salaryAmount.value === '') {
            alert('Ошибка, введите число');
            return
            };
    };

        appData.budget = salaryAmount.value;
        appData.getExpenses();
        appData.methodBudget();
        appData.methodgetMissionAndAccumulatedMonth();
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

start.addEventListener('click', appData.methodStart);
expensesPlus.addEventListener('click', appData.addExpensesBlock);

        
        
        // appData.methodShowData();