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

Pizza.prototype.pizzaSize = function () {
    let total = PizzaOrder.total;
    if (pizzaSize === "20") {
      return (total = "$25");
    } else if (pizzaSize === "16") {
      return (total = "$21");
    } else if (pizzaSize === "12") {
      return (total = "$17");
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
        let name = document.querySelector("input#name").value;
        let pDisp = document.querySelector("p#displayName");
        let divDisp = document.querySelector("div#display");
        pDisp.innerText = name;
        let p = document.createElement("p");
        let total = pizzaOrder.total;
        p.append(total);
        divDisp.append(p);
    })
})