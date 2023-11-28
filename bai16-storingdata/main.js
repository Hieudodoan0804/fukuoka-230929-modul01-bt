let products = [
    {
        name: "sach",
        price: 100000,
        id: 1,
        image: "./img/pexels-dzenina-lukac-1005012.jpeg"
    },
    {
        name: "sach",
        price: 100000,
        id: 1,
        image: "img/pexels-elīna-arāja-3309957.jpeg"
    },
    {
        name: "sach",
        price: 100000,
        id: 1,
        image: "img/pexels-lisa-fotios-734968.jpeg"
    },
    {
        name: "sach",
        price: 100000,
        id: 1,
        image: "img/pexels-lisa-fotios-1516983.jpeg"
    },
    {
        name: "sach",
        price: 100000,
        id: 1,
        image: "img/pexels-nadi-lindsay-3410287.jpeg"
    },
    {
        name: "sach",
        price: 100000,
        id: 1,
        image: "img/pexels-pixabay-256450.jpeg"
    },
    {
        name: "sach",
        price: 100000,
        id: 1,
        image: "img/pexels-oladimeji-ajegbile-2386687.jpeg"
    },
    {
        name: "sach",
        price: 100000,
        id: 1,
        image: "img/pexels-polina-zimmerman-3747163.jpeg"
    },
    {
        name: "sach",
        price: 100000,
        id: 1,
        image: "img/pexels-thought-catalog-904620.jpeg"
    },
    {
        name: "sach",
        price: 100000,
        id: 1,
        image: "img/pexels-thought-catalog-2228586.jpeg"
    },
];

let itemPage = 3;
let totalPage = Math.ceil(products.length / itemPage);
let currentPage = 1;
let start;
let end;
function startEnd(current) {
    start = (current - 1) * itemPage;
    end = current * itemPage;
}
startEnd(1);

function showProduct() {
    let text = "";
    for (let i = 0; i < products.length; i++) {
        if (i >= start && i < end) {
            text +=
                `
                <div class="container__product--item">
                <div class="product__item--img">
                    <img src="${products[i].image}" alt="">
                </div>
                <h3>name:${products[i].name}</h3>
                <p>price:${products[i].price}</p>
                <i class="fa-solid fa-cart-shopping"> cart</i>
                </div>
                `
        }
    }
    document.getElementsByClassName("container")[0].innerHTML = text;
}
showProduct();