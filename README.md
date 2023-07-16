## Pizza Parlor 
##### By Tessa Hayden
---

An application to order pizza using object constructors and prototypes.

#### Technologies used:

1. HTML
2. CSS
3. Javascript
4. Bootstrap
5. Web APIs

### Description:

 A customer has 3 size options and toppings to choose from.  Based on what the customer asks for a custom order will be put in and the total with the an order summary will be displayed.

### Setup:

- _Clone Repository to your desktop_
- _Navigate to the top level of directory, index.html_
- _Open index.html in your browser_

#### Link to repository:

https://github.com/TessaHayden/pizza-parlor

#### Known Bugs:

- If the submit button is clicked repeatedly a corresponding total will be appended to the end of the currently displayed total.
* Fixed problem by removing the createElement method and wrote another HTML tag for the current.

- If you remove a topping the price remains the same.

#### TDD:
Describe customPizza();

Test: "It should determine what size pizza the customer wants."
Code: 
if (pizzaSize === "20") {
    return this.total = "$25";
} else if (pizzaSize === "16") {
    return this.total = "$21";
} else if (pizzaSize === "12") {
    return this.total = "$18";
} else {
    window.alert("no input was received");
}
Expected Output: total: "18"/"21"/"25"

Describe Pizza.prototype.pizzaToppings()

Test: "It should determine what toppings are selected."
Code:
let total = pizzaOrder.total;
let toppingsVals = [];
Expected Output: toppingsVals = [...]

Test: "For 2 meat toppings 6 should be added to the total."
Code:
let total = pizzaOrder.total;
let currentTotal;
Expected Output: total = 6;

Describe Pizza.pizzaSize()
Test:"It should add the size cost to the total."
Code:
Pizza.size = querySelector("input[name='size']:checked");
PizzaOrder.total = pizzaSizePrice;
Expected Output: 18 for a 12inch pizza.

Describe orderTotal()

Test: "It should add up the cost of the pizza order."
Code:
if (toppings.includes("pepperoni")) {
    console.log("Order Total.");
}
Expected Output: "Order Total"





<sub>MIT
copyright (c) _2023_ _Tessa Hayden_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</sub>