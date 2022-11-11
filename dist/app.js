"use strict";
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("num-of-people");
const reset = document.querySelector(".reset-btn");
let tipBtn = document.querySelectorAll(".tip");
const tip5percent = document.querySelector(".tip5");
const tip10percent = document.querySelector(".tip10");
const tip15percent = document.querySelector(".tip15");
const tip25percent = document.querySelector(".tip25");
const tip50percent = document.querySelector(".tip50");
const tipPerPerson = document.querySelector(".tip-amount-num");
const totalPerPerson = document.querySelector(".total-amount-num");
function updateTotal() {
    let billValue = parseFloat(billInput.value);
    let tipValue = parseFloat(tipPerPerson.innerHTML.slice(1));
    let peopleValue = peopleInput.value;
    totalPerPerson.textContent = `$${(billValue + tipValue) / peopleValue}`;
}
function resetValues() {
    billInput.value = 0;
    peopleInput.value = 1;
    updateTotal();
}
reset === null || reset === void 0 ? void 0 : reset.addEventListener("click", resetValues);
tipBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        tipPerPerson.textContent =
            "$" +
                (billInput.value * (parseFloat(btn.innerHTML) / 100)) / peopleInput.value;
        updateTotal();
    });
});
//# sourceMappingURL=app.js.map