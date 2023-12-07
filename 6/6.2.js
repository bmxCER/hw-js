// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

//  -- відсортувати його за спаданням за monthDuration

let monthSort = coursesAndDurationArray.sort((month1, month2) =>{
    return month2.monthDuration - month1.monthDuration
})
console.log(monthSort)

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter((month) => month.monthDuration > 5)
let monthSort2 = filter.sort((month1, month2) =>{
    return month2.monthDuration - month1.monthDuration
})
console.log(monthSort2)

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let mapId = coursesAndDurationArray.map((value, index) => {
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration,
    }
})
console.log(mapId)
// описати колоду карт (від 6 до туза без джокерів)

let cardDeck = [

]

const cardSuits = ['spade', 'diamond', 'heart', 'clubs']
const cardValues = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
const cardColors = ['black', 'red']

for (const suit of cardSuits){
    for (const value of cardValues){
        for (color of cardColors){
            if (suit === 'spade' || suit === 'clubs'){
                color = 'black'
            } else {
                color = 'red'
            }
        }
        const card = {
            cardSuit: suit,
            cardValue: value,
            cardColor: color
        }
        cardDeck.push(card)
    }

}
console.log(cardDeck)

// - знайти піковий туз

let aceFind = cardDeck.find(card => card.cardSuit === 'spade' && card.cardValue === 'ace')
console.log(aceFind)

// - всі шістки

let sixFind = cardDeck.filter(card => card.cardValue === '6')
console.log(sixFind)

// - всі червоні карти

let  redFind = cardDeck.filter(card => card.cardColor === 'red')
console.log(redFind)

// - всі буби

let diamondFind = cardDeck.filter(card => card.cardSuit === 'diamond')
console.log(diamondFind)

// - всі трефи від 9 та більше

let valueFind = cardDeck.filter(card => cardValues.indexOf(card.cardValue) >= cardValues.indexOf('9'))
console.log(valueFind)

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let reduceCards = cardDeck.reduce((accumulator, card) =>{
    if (card.cardSuit === 'spade'){
        accumulator.spades.push(card)
    } else if (card.cardSuit === 'diamond'){
        accumulator.diamonds.push(card)
    } else if (card.cardSuit === 'heart'){
        accumulator.hearts.push(card)
    } else if (card.cardSuit === 'clubs'){
        accumulator.clubs.push(card)
    }
    return accumulator
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log(reduceCards)

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass

let sassFind = coursesArray.filter(module => module.modules.includes('sass'))
console.log(sassFind)

// --написати пошук всіх об'єктів, в який в modules є docker

let dockerFind = coursesArray.filter(module => module.modules.includes('docker'))
console.log(dockerFind)
