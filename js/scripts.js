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
      return (total = "$17");
    } else {
      window.alert("no input was received");
    }
}



let pizzaOrder = new PizzaOrder();

window.addEventListener("load", function () {
    let form = document.getElementById("customer-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let total = pizzaOrder.total;
        let name = document.querySelector("input#name").value;
        let tDisp = document.querySelector("p#display-total");
        let nDisp = document.querySelector("p#display-name");
        tDisp.innerText = total;
        nDisp.innerText = name;
    });
})