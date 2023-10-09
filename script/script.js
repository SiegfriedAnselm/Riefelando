function render() {
    console.log();
    renderPizza();
    renderBurger();
    renderSalad();
}

function renderPizza() {
    let menuPizza = document.getElementById('pizza');
    menuPizza.innerHTML = "";
    let pizzas = menu["pizzas"];
    for (let p = 0; p < pizzas.length; p++) {
        menuPizza.innerHTML += pizzaTemplate(pizzas, p);
    }
}

function renderBurger() {
    let menuBurger = document.getElementById('burger');
    menuBurger.innerHTML = "";
    let burgers = menu["burgers"];
    for (let b = 0; b < burgers.length; b++) {
        menuBurger.innerHTML += burgerTemplate(burgers, b);
    }
}

function renderSalad() {
    let menuSalad = document.getElementById('salat');
    menuSalad.innerHTML = "";
    let salads = menu["salads"];
    for (let s = 0; s < salads.length; s++) {
        menuSalad.innerHTML += saladTemplate(salads, s);
    }
}

function addToBasket(item, dishIndex) {
    let sort = item[dishIndex];
    if(basket.sorts.includes(sort.sorts)) {
        let basketIndex = checkSortsIndex(sort);
        basket.amount[basketIndex]++;
    } else {
        basket.sorts.push(item[dishIndex]['sorts']);
        basket.price.push(item[dishIndex]['price']);
        basket.amount.push(item[dishIndex]['amount']);
    }
    renderBasket();
}

function renderBasket() {
    let basketMenu = document.getElementById('content');
    let basketMenuResp = document.getElementById('contentResponsive');
    basketMenu.innerHTML = '';
    basketMenuResp.innerHTML = '';
    for(i = 0; i < basket.sorts.length; i++) {
    basketMenu.innerHTML += basketCardTemplate(i, basket);
    basketMenuResp.innerHTML += basketCardTemplate(i, basket);
    }
    render();
    document.getElementById('cost').innerHTML = checkOutBasket();
    document.getElementById('costResponsive').innerHTML = checkOutBasket();
}

function checkSortsIndex(sort) {
    let basketMenu = basket.sorts.indexOf(sort.sorts);
    return basketMenu;
}

function pushAmount(basketIndex) {
    basket.amount[basketIndex]++;
    renderBasket();
}

function reduceAmount(basketIndex) {
    let basketAmount = basket.amount[basketIndex];
    if(basketAmount > 1) {
    basket.amount[basketIndex]--;
    } else {
        basket.amount.splice(basketIndex, 1);
        basket.sorts.splice(basketIndex, 1);
        basket.price.splice(basketIndex, 1);
    }
    renderBasket();
}

function openBasket() {
    document.getElementById('responsiveBasket').classList.remove('d-none');
}

function closeBasket() {
    document.getElementById('responsiveBasket').classList.add('d-none');
}

function order(basketIndex) {
    if(basket.sorts.length >= 1) {
        alert('Vielen Dank für ihre bestellung!');
    document.getElementById('cost').innerHTML = '';
    document.getElementById('costResponsive').innerHTML = '';
    document.getElementById('content').innerHTML = '';
    document.getElementById('contentResponsive').innerHTML = '';
    basket.amount.splice(length);
    basket.sorts.splice(length);
    basket.price.splice(length);
    } else {
        alert('Warenkorb darf nicht Leer sein')
    }
}