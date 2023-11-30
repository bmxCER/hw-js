// створити функцію яка створює параграф з текстом. Текст задати через аргумент

function text(p) {
    document.write(`<p>${p}</p>`)
}

text('text')

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ul(text) {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}
ul('qwerty')

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ulList(text, quantity) {
    document.write(`<ul>`)
    for (let li = 0; li < quantity; li++){
        document.write(`<li> ${text} </li>`)
    }
    document.write(`</ul>`)
}
ulList('qwerty', 15)

