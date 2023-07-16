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
    let inputToppings = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    for (let i = 0; inputToppings[i]; i++) {
      toppingsVals.push(inputToppings[i].value);
    }
    return toppingsVals;
}

function orderTotal(toppingsVals) {
    let size = parseInt(chooseSize());
    let toppings = addToppings();
    if (toppings.includes("pepperoni")) {
        console.log("Order Total")
    }
    if (toppings.includes("sausage")) {
      console.log("Order Total");
    }
    if (toppings.includes("mushroom")) {
      console.log("Order Total");
    }
    if (toppings.includes("olive")) {
      console.log("Order Total");
    }
}

function customerInfo() {
    let name = document.querySelector("input#name").value;
    let nDisp = document.querySelector("p#display-name");
    nDisp.innerText = name;
}
function placeOrder() {
    let orderSummary = document.querySelector("p#pizza-summary");
    let totalSummary = document.querySelector("p#display-total");
    orderSummary.innerText = "hi";
    totalSummary.innerText = "total";
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

