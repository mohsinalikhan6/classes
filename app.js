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
        return `Your Current Account Balance is ${this.totalIncome - this.totalExpense}`
    }

}

// For Friend1 Personal Account

const my = new PersonAccount("Mohsin", 'Ali', 2000, "From Salary", 1950, "Home Grocery", 500, 450)
console.log(my)
console.log(my.accountBalance())


// For Friend2 Personal Account

const friend2 = new PersonAccount("Ubaid", 'Ali', 2000, "From Salary", 1900, "Home Grocery", 500, 400)
console.log(friend2)
console.log(friend2.accountBalance())



// Parent Class
// Automobile

class Automobile {
    constructor(name, model, color, type) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.type = type;
    }
    start() {
        return `Your new ${this.name} looking Good in ${this.color} color, Ready for Drive`
    }
    openDoor() {
        return `Your new car ${this.name} doors is open for you and Have a pleasant drive`
    }

}


// This is the Child of Automobile
// For Class Car  

class Cars extends Automobile {
    constructor(name, model, color, type, seats, airConditioning) {
        super(name, model, color, type)
        this.seats = seats;
        this.airConditioning = airConditioning
    }
}

const myCar = new Cars('Lamborghini', 2022, 'Black', 'Manual', 4, 'Available')

console.log(myCar)
console.log(myCar.start())
console.log(myCar.openDoor())


// This is the Child of Automobile
// For Class Truck  


class Truck extends Automobile {
    constructor(name, model, color, type, wheels, size, bodyType, saftey) {
        super(name, model, color, type)
        this.wheels = wheels;
        this.size = size;
        this.bodyType = bodyType;
        this.saftey = saftey;
    }
}

const monsterTruck = new Truck('Avenger', 2020, 'red', 'Manual', 'Four Wheels', 'Medium', 'Box Truck', 'Available')

console.log(monsterTruck)
console.log(monsterTruck.start())
console.log(monsterTruck.openDoor())


// This is the Child of Automobile
// For Class Bus 

class Bus extends Automobile {
    constructor(name, model, color, type, wheels, size, seates, saftey, routes) {
        super(name, model, color, type)
        this.wheels = wheels;
        this.size = size;
        this.seates = seates;
        this.saftey = saftey;
        this.routes = routes;
    }
}

const coach = new Bus('ExpressCoach', 2022, 'White', 'Manual', 'Ten Wheels', 'Large', '50 Seates', 'Available', 'Karachi to Naran')

console.log(coach)
console.log(coach.start())
console.log(coach.openDoor())
