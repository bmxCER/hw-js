// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


let users = []
function User (id, name, surname, email, phone){
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

users.push(new User(1, 'max', 'ivanov', 'max@gmail.com', '+380639802345'),
    new User(2, 'andrey', 'petrov', 'andrey@gmail.com', '+38050740913456'),
    new User(3, 'olya', 'andreeva', 'olya@gmail.com', '+38095851024567'),
    new User(4, 'andrey', 'andreev', 'andrey@gmail.com', '+38065962135678'),
    new User(5, 'vasya', 'vasiliev', 'vasya@gmail.com', '+380734759172'),
    new User(6, 'petya', 'petrov', 'petya@gmail.com', '+3800904568921'),
    new User(7,'danil', 'baranov', 'danil@gmail.com', '+380758769327'),
    new User(8, 'denis', 'grigorenko', 'denis@gmail.com', '+380954320975'),
    new User(9, 'ivan', 'barinov', 'ivan@gmail.com', '+380504406570'),
    new User(10, 'nastya', 'petrova', 'nastya@gmail.com', '+380736718065'))

console.log(users)

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = users.filter(i => i.id % 2 === 0)
console.log(filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortId = users.sort((user1, user2) =>{
    return user1.id - user2.id
})
console.log(sortId)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

let clients =[]

function Client(id, name, surname, email, phone, order) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.order = order
}

clients.push(new Client(1, 'max', 'ivanov', 'max@gmail.com', '+380639802345', ['milk', 'tea']),
    new Client(2, 'andrey', 'petrov', 'andrey@gmail.com', '+38050740913456', ['cheese', 'meat']),
    new Client(3, 'olya', 'andreeva', 'olya@gmail.com', '+38095851024567', ['tea', 'cookies']),
    new Client(4, 'andrey', 'andreev', 'andrey@gmail.com', '+38065962135678', ['sweet', 'yogurt', 'tea', 'milk', 'chocolate']),
    new Client(5, 'vasya', 'vasiliev', 'vasya@gmail.com', '+380734759172', ['banana', 'coconut']),
    new Client(6, 'petya', 'petrov', 'petya@gmail.com', '+3800904568921', ['beer', 'cucumber', 'chips']),
    new Client(7,'danil', 'baranov', 'danil@gmail.com', '+380758769327', ['strawberry', 'blueberry', 'milk', 'tea']),
    new Client(8, 'denis', 'grigorenko', 'denis@gmail.com', '+380954320975', ['tea', 'chocolate']),
    new Client(9, 'ivan', 'barinov', 'ivan@gmail.com', '+380504406570', ['meat', 'fish']),
    new Client(10, 'nastya', 'petrova', 'nastya@gmail.com', '+380736718065', ['onion', 'lemon', 'fish']))

console.log(clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortOrder = clients.sort((order1, order2) =>{
    return order1.order.length - order2.order.length
})
console.log(sortOrder)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

let cars = []

function Car(model, producer, year, maxSpeed, engineCapacity){
    this.model = model
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineCapacity = engineCapacity
    this.drive = function (){
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function (){
        for (carInfo in this){
            if (typeof this[carInfo] !== "function"){
                console.log(`${carInfo} - ${this[carInfo]}`)
            }
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed
        console.log(`Нова максимальна швидкість тепер ${this.maxSpeed}`)
    }
    this.changeYear = function (newValue){
        this.year = newValue
        console.log(`Новий рік випуску - ${this.year}`)
    }
    this.addDriver = function (driver){
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

