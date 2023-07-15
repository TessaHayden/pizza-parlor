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

Pizza.prototype.pizzaSize = function () {
    let total = PizzaOrder.total;
    if (pizzaSize === "20") {
        console.log(size);
      return (total = "$25");
    } else if (pizzaSize === "16") {
      return (total = "$21");
    } else if (pizzaSize === "12") {
      return (total = "$18");
    } else {
      window.alert("no input was received");
    }
}

Pizza.prototype.pizzaToppings = function () {
    let toppingsVals = [];
    let inputToppings = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    for (let i = 0; inputToppings[i]; i++) {
        toppingsVals.push(inputToppings[i].value);
    }
    return toppingsVals;
}

let pizzaOrder = new PizzaOrder();
let pizza = new Pizza();

function customerInfo() {
    let total = pizzaOrder.total;
    let name = document.querySelector("input#name").value;
    let tDisp = document.querySelector("p#display-total");
    let nDisp = document.querySelector("p#display-name");
    tDisp.innerText = total;
    nDisp.innerText = name;
}
function placeOrder() {
    let orderSummary = document.querySelector("p#pizza-summary");
    let toppings = pizza.pizzaToppings();
    orderSummary.innerText = toppings;
    
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
        placeOrder();
    });
})

