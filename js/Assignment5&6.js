// Name: Sharath Mohan StudentID: C0894212

// Create Class and add required fields and methods.
class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }
    // Method for honking and displaying properties
    honk() {
        console.log(`Tuut tuut - This is a ${this.brand} ${this.model} from ${this.year}.`);
        console.log(`It is in ${this.color} color and costs $${this.price.toFixed(2)}.`);
        console.log(`The average gas mileage is ${this.gas}`);
    }

    // Method for Racing.
    AdjustFuel() {
        // Reduce gas by 5 if year is 2023. Else reduce by 5 + difference in current year and car year.
        this.gas -= (this.year === 2023 ? 5 : 5 + (2023 - this.year)); 
        if(this.gas>0){
            console.log(`Car ${this.brand + ' ' +this.model} has ${this.gas} litres left.`)   
        } else{
            console.log(`Car ${this.brand + ' ' +this.model} has no fuel left.`)
        }
    }
}

// Create objects
let car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45, 50);
let car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30, 60);
let car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65, 70);
let car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60, 80);
let car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47, 90);
let car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56, 75);

let cars = [car1,car2,car3,car4,car5,car6]

// Invoke honk method for all the objects
cars.forEach(function(car,index){
    console.log(`Car number ${index}`)
    console.log(car.honk())
});

// Racing Section
for (let turn = 0; turn < 7; turn++) {
    console.log(`Turn Number: ${turn+1}`)
    cars.forEach(function(car){
        car.AdjustFuel()
    });
    
}