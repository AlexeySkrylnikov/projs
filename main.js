class ProductList {
    constructor(container = '.productWrapper') {
        this.container = container;
        this.goods = [];
        this._fetchProducts(products);
        this.render();
        this.getProductsSum();
    }

    _fetchProducts(products) {
        products.forEach(item => this.goods.push(item));
    }

    /**
     * Задание 2. Метод для подсчета суммы всех товаров
     * @total итоговая сумма
     */
    getProductsSum() {
        let total = 0;
        this.goods.forEach(item => total += item.price);
        console.log(`Сумма всех товаров ${total}`);
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
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
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

// Задание 1
class Basket {
    constructor(container) {
        this.container = container;
    }

    _addToBasket() {

    }

    _removeFromBasket() {

    }

    _getBasketTotalSum() {

    }

    render() {

    }
}

// Задание 1
class BasketItem {
    constructor(item) {
        this.title = item.title;
        this.id = item.id;
        this.price = item.price;
    }

    render() {

    }

}

let list = new ProductList();