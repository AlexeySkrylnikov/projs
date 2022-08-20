'use sctrict'

const renderProduct = product => {
    return `<div class="product">
        <h3>${product.title}</h3>
        <img class="productImg" src="${product.img}">
        <p class="price">Цена: ${product.price}</p>
        <button class="buyButton">Купить</button>
    </div>`
};

const renderPage = list => {
    document.querySelector('.productWrapper').innerHTML = list.map(product => renderProduct(product)).join('');
    document.querySelector('.footerText').innerHTML = 'Все права защищены © ' + new Date().getFullYear();
};

renderPage(products);