// Class Personal Accounts 

class PersonAccount {
    constructor(firstName, lastName, income, incomeDescription, expense, expenseDescription, addIncome, addExpense, totalIncome) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomesDetails = {
            income: income,
            incomeDescription: incomeDescription,
        };
        this.expensesDetails = {
            expense: expense,
            expenseDescription: expenseDescription,
        };
        this.addIncome = addIncome;
        this.addExpense = addExpense;
        this.totalIncome = income + addIncome;
        this.totalExpense = expense + addExpense;
    }
    accountBalance() {
        // document.getElementById('balance').innerHTML = `Your Current Account Balance is ${this.totalIncome - this.totalExpense}`



        return `Your Current Account Balance is ${this.totalIncome - this.totalExpense}`


        // return this.totalIncome - this.totalExpense + ' your Balance'
    }

}


// For Friend1 Personal Account

const person = new PersonAccount("Umair", 'Ali', 2000, "From Salary", 1950, "Home Grocery", 500, 450)
console.log(person)
console.log(person.accountBalance())

// For Friend2 Personal Account

const person2 = new PersonAccount("Ubaid", 'Ali', 2000, "From Salary", 1900, "Home Grocery", 500, 400)
console.log(person2)
console.log(person2.accountBalance())








// console.log(person.expensesDetails.expense)
// document.getElementById('balance').innerHTML = person.accountBalance()





