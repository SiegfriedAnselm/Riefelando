function pizzaTemplate(pizzas, p) {
    const pizza = pizzas[p];
    return `
    <div class="mealCard">
        <div class="menu">
            <h4>${pizza["sorts"]}</h4>
            <div class="ingreed">${pizza["ingreeds"]}</div>
        </div>
        <div class="addToBasket">
            <button class="addToBasketBtn" onclick="addToBasket(${'pizzas'}, ${p})">+</button
            <span class="price">${pizza["price"]}€</span>
        </div>
    </div>`;
}

function burgerTemplate(burgers, b) {
    const burger = burgers[b];
    return `
    <div class="mealCard">
        <div class="menu">
            <h4>${burger["sorts"]}</h4>
            <div class="ingreed">${burger["ingreeds"]}</div>
        </div>
        <div class="addToBasket">
            <button class="addToBasketBtn" onclick="addToBasket(${'burgers'}, ${b})">+</button
            <span class="price">${burger["price"]}€</span>
        </div>
    </div>`;
}

function saladTemplate(salads, s) {
    const salad = salads[s];
    return `<div class="mealCard">
    <div class="menu">
        <h4>${salad["sorts"]}</h4>
        <div class="ingreed">${salad["ingreeds"]}</div>
    </div>
    <div class="addToBasket">
        <button class="addToBasketBtn" onclick="addToBasket(${'salads'}, ${s})">+</button
        <span class="price">${salad["price"]}€</span>
    </div>
</div>`;
}

function basketCardTemplate(i, basket) {
    let sumPerIndex = basket.price[i]*basket.amount[i];
    sumPerIndex = sumPerIndex.toFixed(2);
    return `
            <div class="basketCard">
                <h4>${basket.sorts[i]}</h4>
                    <div class="checkout">
                        <div class="changeAmount">
                            <button onclick="pushAmount(${i})">+</button>
                            <h5>${basket.amount[i]}</h5>
                            <button onclick="reduceAmount(${i})">-</button>
                        </div>
                        <h5>${sumPerIndex} €</h5>
                    </div>
            </div>`;
}

function checkOutBasket() {
    let priceIndex = basket.price;
    let amountIndex = basket.amount;
    let sum = 0;
    for (let i = 0; i < priceIndex.length; i++) {
        sum += priceIndex[i]*amountIndex[i];
    }
    let finalSum = sum+2.00;
    sum = sum.toFixed(2);
    finalSum = finalSum.toFixed(2);
    return `
        <div class="paySum">
            <div class="sum"><span>Zwischensumme:</span><span>${sum} €</span></div>
            <div class="sum"><span>Lieferkosten:</span><span>2.00 €</span></div>
            <div class="sumAll"><span><b>Gesamt:</b></span><span>${finalSum} €</span></div>
        </div>
        `;
    }