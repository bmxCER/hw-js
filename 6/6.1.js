// - Знайти та вивести довижину настипних стрінгових значень

let str1 = 'hello world'
let str2 = 'lorem ipsum'
let str3 ='javascript is cool'

console.log(str1.length, str2.length, str3.length)


// - Перевести до великого регістру наступні стрінгові значення

let str4 = 'hello world'
let str5 = 'lorem ipsum'
let str6 ='javascript is cool'

console.log(str4.toUpperCase(), str5.toUpperCase(), str6.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення

let str7 = 'HELLO WORLD'
let str8= 'LOREM IPSUM'
let str9= 'JAVASCRIPT IS COOL'

console.log(str7.toLowerCase(), str8.toLowerCase(), str9.toLowerCase())

// - Є "брудна" стрінга . Почистити її від зайвих пробілів.

let dirtyStr = ' dirty string   '

console.log(dirtyStr.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str10 = 'Ревуть воли як ясла повні'

let split = str10.split(' ')
console.log(split)

// - є масив чисел . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0]

let map = numbers.map(number => String(number))
 console.log(map)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

let nums = [11,21,3]

let sortNums1 = nums.sort((n1, n2) =>{
    return n1 - n2
})
console.log(sortNums1)

let sortNums2 = nums.sort((n1, n2) =>{
    return n2 - n1
})
console.log(sortNums2)
