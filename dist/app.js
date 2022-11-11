"use strict";
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("num-of-people");
const reset = document.querySelector(".reset-btn");
const tip5percent = document.querySelector(".tip5");
const tip10percent = document.querySelector(".tip10");
const tip15percent = document.querySelector(".tip15");
const tip25percent = document.querySelector(".tip25");
const tip50percent = document.querySelector(".tip50");
const tipPerPerson = document.querySelector(".tip-amount-num");
const totalPerPerson = document.querySelector(".total-amount-num");
function updateTotal() {
    let billValue = billInput.value;
    totalPerPerson.textContent = "$" + parseFloat(billValue);
}
//# sourceMappingURL=app.js.map