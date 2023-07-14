function PizzaOrder() {
    this.pizza = {},
    this.customer = {},
    this.total = 0
}

function Customer(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
}
function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

PizzaOrder.prototype.pizzaSize = function () {
    if (pizzaSize === "20") {
      return (this.total = "$25");
    } else if (pizzaSize === "16") {
      return (this.total = "$21");
    } else if (pizzaSize === "12") {
      return (this.total = "$17");
    } else {
      window.alert("no input was received");
    }
}



let pizzaOrder = new PizzaOrder();

window.addEventListener("load", function (event) {
    event.preventDefault();
    let form = document.getElementById("customer-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.querySelector("input#name");
        let pDisp = document.querySelector("p#displayName");
        pDisp.innerText = name;
    })
})