function PizzaOrder() {
    this.pizza = {},
    this.customer = {},
    this.total = 0
}

function Customer(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
}

function Pizza(size) {
    this.size = size;
    this.toppings = {};
}

let pizzaOrder = new PizzaOrder();
let pizza = new Pizza();

function chooseSize() {
    let radioSize = parseInt(document.querySelector("input[type='radio']:checked").value);
    return (pizzaOrder.total = radioSize);
}

function addToppings() {
    let toppingsVals = [];
    let inputToppings = document.querySelectorAll('input[type="checkbox"]:checked');
    for (let i = 0; inputToppings[i]; i++) {
      toppingToAdd = parseInt(inputToppings[i].value);
      toppingsVals.push(toppingToAdd);
    }
    let toppingChoices = toppingsVals.reduce(addToppingValues);
    function addToppingValues(total, value) {
        return total + value;
    }
    let toppingPrices = parseInt(toppingChoices);
    return toppingPrices;
}

function orderTotal() {
    let sizeCost = parseInt(chooseSize());
    let toppings = parseInt(addToppings());
    let total = sizeCost + toppings;
    pizzaOrder.total = total;
}

function customerInfo() {
    let tele = document.querySelector("input#phone").value;
    let name = document.querySelector("input#name").value;
    let tDisp = document.querySelector("p#display-phone");
    let nDisp = document.querySelector("p#display-name");
    nDisp.innerText = name;
    tDisp.innerText = tele;
}

function placeOrder() {
    let orderSummary = document.querySelector("p#pizza-summary");
    let totalSummary = document.querySelector("p#display-total");
    let toppingsVals = [];
    let inputToppings = document.querySelectorAll('input[type="checkbox"]:checked');
    for (let i = 0; inputToppings[i]; i++) {
      toppingsVals.push(inputToppings[i].name);
    }
    orderSummary.innerText = toppingsVals;
    totalSummary.innerText = pizzaOrder.total;
}

window.addEventListener("load", function () {
    let form = document.getElementById("customer-form");
    let pizzaOrder = document.getElementById("pizza-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        customerInfo();
    });
    pizzaOrder.addEventListener("submit", function (event) {
        event.preventDefault();
        orderTotal();
        placeOrder();

    });
})

