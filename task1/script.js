'use strict';
    /* Описание задания

    Вам нужно оформить программу конвертер валют, используя пройденные темы.

    Программа должна уметь переводить 5 валют друг в друга (валюты на ваше усмотрение). 
    Пользователь вводит сначала название валюты, затем вводит сумму, и название валюты 
    в которую хочет перевести, после чего получает ответ (для общения с пользователем 
    используем prompt и alert подробнее [тут](https://learn.javascript.ru/alert-prompt-confirm)). 
    Если пользователь ввел что-то неверно, нужно повторить ввод этой информации. 
    По окончании конвертации спросить у пользователя хочет ли он произвести конвертацию 
    еще раз. Если да - то повторить все о'и. Если нет - выполнить выход из программы. */
    
    let UAH = 1;
    let USD = 26.23;
    let BYN = 10.64;
    let GBP = 35.84;
    let RUB = 0.38;

    let currentCurr;
    let amount;
    let convertToCurr;

    let doAgain;

    do{
        while (currentCurr !== "USD" && currentCurr !== "BYN" && currentCurr !== "GBP" && currentCurr !== "RUB" && currentCurr !== "UAH")
        currentCurr = prompt("Enter current currecy which you want to convert: USD, BYN, GBP, RUB, UAH","");
            
        while (!amount || amount < 0)
            amount = +prompt(`Amount in ${currentCurr}:`,"");

        while (convertToCurr !== "USD" && convertToCurr !== "BYN" && convertToCurr !== "GBP" && convertToCurr !== "RUB" && convertToCurr !== "UAH")
            convertToCurr = prompt(`${amount} ${currentCurr} Convert to: USD, BYN, GBP, RUB, UAH`,""); 
        
        switch(currentCurr) {
            case "UAH":
                currentCurr = UAH;
                break;
            case "USD":
                currentCurr = USD;
                break;
            case "BYN":
                currentCurr = BYN;
                break;
            case "GBP":
                currentCurr = GBP;
                break;
            case "RUB":
                currentCurr = RUB;
                break;
        };

        switch(convertToCurr) {
            case "UAH":
                convertToCurr = UAH;
                break;
            case "USD":
                convertToCurr = USD;
                break;
            case "BYN":
                convertToCurr = BYN;
                break;
            case "GBP":
                convertToCurr = GBP;
                break;
            case "RUB":
                convertToCurr = RUB;
                break;
        };

        alert(amount * currentCurr / convertToCurr);

        doAgain = confirm("Do you want convert currency again?");
    }
while (doAgain);