// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function many(array) {
    for (const text of array){
        console.log(text)
    }
}
many([11, 'text', true])

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function userList(array) {
    for (const user of array){
        for (const userName in user){
            console.log(userName, user[userName])
        }
    }
}

let users = [
    {name: 'vasya', age: 31, id: 12345},
    {name: 'petya', age: 30, id: 67893},
    {name: 'kolya', age: 29, id: 45821},
    {name: 'olya', age: 28, id: 98641},
    {name: 'max', age: 30, id: 21425},
    {name: 'anya', age: 31, id: 15152},
    {name: 'oleg', age: 28, id: 12556},
    {name: 'andrey', age: 29, id: 32674},
    {name: 'masha', age: 30, id: 23526},
    {name: 'olya', age: 31, id: 26345},
    {name: 'max', age: 31, id: 12532}
];
userList(users)

// створити функцію яка повертає найменьше число з масиву


function min(numbers) {
    const nMin = Math.min(...numbers)
    return nMin
}

let num = min([1, 2, -3, 7, 5, 16])
console.log(num)


// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let sumArr = 0
    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i]
    }
    return sumArr
}

let x = sum([1,2,10])
console.log(x)

// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    if (index1 < arr.length && index2 < arr.length){
        let x = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = x
    }
    return arr
}

let n = swap([11,22,33,44],0,1)
console.log(n)

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currncyValues, exchangeCurrency) {
    let x = sumUAH / exchangeCurrency
    for (const currency of currncyValues) {
        let currency = currncyValues
        console.log(currency)
    }
    return x
}

let value = exchange(10000, 'USD',40)
console.log(value)

