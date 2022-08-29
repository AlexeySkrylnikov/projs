const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/";

class ProductList {
    constructor(container = '.productWrapper') {
        this.container = container;
        this.goods = [];
        //this._fetchProducts(products);
        this.render();
        this._getProducts()
            .then(data => {
                this.goods = data;
                //console.log(data);
                this.render();
                this._getProductsSum();
            });
    }

    // _fetchProducts(products) {
    //     products.forEach(item => this.goods.push(item));
    // }

    _getProductsSum() {
        let total = 0;
        this.goods.forEach(item => total += item.price);
        console.log(`Сумма всех товаров ${total}`);
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }
}

class ProductItem {
    constructor(product, img = 'http://via.placeholder.com/350x150') {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }

    render() {
        return `<div class="product">
        <h3>${this.title}</h3>
        <img class="productImg" src="${this.img}">
        <p class="price">Цена: ${this.price}</p>
        <button class="buyButton">Купить</button>
    </div>`
    }
}

class Basket {
    constructor(container = ".backetContent") {
        this.container = container;
        this.basketContent = [];
        this.basketTotal = ".basketTotalValue";
        this._getBasket()
            .then(data => {
                this.basketContent = data.contents;
                //console.log(this.basketContent);
                this.render();
            });
    }

    // _addToBasket() {

    // }

    // _removeFromBasket() {

    // }

    _getBasketTotalSum() {
        let totalSum = 0;
        this.basketContent.forEach(item => totalSum += item.price)
        return totalSum;
    }

    _getBasket() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const basketBlock = document.querySelector(this.container);
        const basketTotal = document.querySelector(this.basketTotal);
        for (let item of this.basketContent) {
            const itemBasket = new BasketItem(item);
            basketBlock.insertAdjacentHTML("beforeend", itemBasket.render());
        }

        basketTotal.innerHTML = this._getBasketTotalSum();
    }
}

class BasketItem {
    constructor(item) {
        this.id_product = item.id_product;
        this.product_name = item.product_name;
        this.price = item.price;
        this.quantity = item.quantity;
    }

    render() {
        return `<div class="basketRow">
        <div>${this.product_name}</div>
        <div>${this.quantity} шт.</div>
        <div>${this.price}</div>
        <div>${this.price}</div>
    </div>`
    }

}

let list = new ProductList();
let basket = new Basket();

let basketButton = document.querySelector(".basketButton");
let basketWindow = document.querySelector(".basket");

basketButton.addEventListener("click", () => {
    basketWindow.classList.toggle("hidden");
});