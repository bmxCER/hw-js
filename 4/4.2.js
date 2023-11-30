// створити функцію яка приймає масив та виводить кожен його елемент

function productList(array) {
    for (const product of array) {
        console.log(product)
    }
}

let products = [
    {
        title: 'milk',
        price: 22,


    },
    {
        title: 'juice',
        price: 27,

    },
    {
        title: 'tomato',
        price: 47,

    },
    {
        title: 'tea',
        price: 15,

    },
];
productList(products)
