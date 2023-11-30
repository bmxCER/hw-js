// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleSquare(a, b) {
    let square = a * b
    console.log(square)
}

rectangleSquare(15, 10)

// створити функцію яка обчислює та повертає площу кола з радіусом r

function circleSquare(r) {
    let square = r * r * Math.PI
    console.log(square)
}

circleSquare(10)

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderSquare(h, r) {
    let hr = r + h
    let square = 2 * Math.PI * hr
    console.log(square)
}

cylinderSquare(20, 15)