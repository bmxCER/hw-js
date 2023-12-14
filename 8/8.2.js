// - (Те саме, тільки через клас)

class Car{
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model
        this.producer = producer
        this.year = year
        this.maxSpeed = maxSpeed
        this.engineCapacity = engineCapacity
    }
    drive = function (){
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info = function (){
        for (let carInfo in this){
            if (typeof this[carInfo] !== "function"){
                console.log(`${carInfo} - ${this[carInfo]}`)
            }
        }
    }
    increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed
        console.log(`Нова максимальна швидкість тепер ${this.maxSpeed}`)
    }
    changeYear = function (newValue){
        this.year = newValue
        console.log(`Новий рік випуску - ${this.year}`)
    }
    addDriver = function (driver){
        this.addDriver = driver
        console.log(`Водій машини - ${driver.name}`)
    }
}

let car1 = new Car('Corrola', 'Toyota', 2021, 191, 116)
car1.drive()
car1.info()
car1.increaseMaxSpeed(15)
car1.changeYear(2008)
car1.addDriver({name: 'vasya', age: 23})

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

let cindrellas = []
class Cinderella{
    constructor(name, age, legSize) {
        this.name = name
        this.age = age
        this.legSize = legSize
    }
}

cindrellas.push(new Cinderella('anya', 21, 37),
    new Cinderella('katya', 22, 36),
    new Cinderella('nastya', 19, 38),
    new Cinderella('dasha', 20, 35),
    new Cinderella('vika', 25, 34),
    new Cinderella('lena', 26, 39),
    new Cinderella('masha', 24, 33),
    new Cinderella('nastya', 27, 40),
    new Cinderella('katya', 18, 41),
    new Cinderella('vika', 25, 42))

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince{
    constructor(name, age, shoe) {
        this.name = name
        this.age = age
        this.shoe = shoe
    }
}
let prince = new Prince('petya', 26, {size: 38})

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (cindrella of cindrellas){
    if (cindrella.legSize === prince.shoe.size){
        console.log(cindrella)
    }
}

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findCindrella = cindrellas.find((cindrella) => cindrella.legSize === 38)
console.log(findCindrella)