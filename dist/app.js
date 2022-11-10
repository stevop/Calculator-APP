"use strict";
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("num-of-people");
const reset = document.querySelector(".reset-btn");
const tip5percent = document.querySelector(".tip5");
const tip10percent = document.querySelector(".tip10");
const tip15percent = document.querySelector(".tip15");
const tip25percent = document.querySelector(".tip25");
const tip50percent = document.querySelector(".tip50");
const tipAmount = document.querySelector(".tip-amount-num");
const totalAmount = document.querySelector(".total-amount-num");
let totalAmountNum = totalAmount.textContent;
let billNum;
billInput === null || billInput === void 0 ? void 0 : billInput.addEventListener("click", () => {
    billInput.removeAttribute("readonly");
    billInput.addEventListener("keyup", (e) => {
        if ((e.keyCode <= 57 && e.keyCode >= 48) ||
            e.keyCode === 16 ||
            e.keyCode === 8 ||
            e.keyCode === 46) {
            billInput.style.border = "none";
            billNum = parseFloat(billInput.value);
            totalAmountNum = billNum / peopleInput.value;
            totalAmount.textContent = `$${totalAmountNum}`;
        }
        else {
            billInput.style.border = "2px red solid";
        }
    });
});
peopleInput === null || peopleInput === void 0 ? void 0 : peopleInput.addEventListener("click", () => {
    peopleInput.removeAttribute("readonly");
    peopleInput.addEventListener("keyup", (e) => {
        if ((e.keyCode <= 57 && e.keyCode >= 48) ||
            e.keyCode === 16 ||
            e.keyCode === 8 ||
            e.keyCode === 46) {
            peopleInput.style.border = "none";
        }
        else {
            peopleInput.style.border = "2px red solid";
        }
    });
});
tip5percent === null || tip5percent === void 0 ? void 0 : tip5percent.addEventListener("click", () => {
    tip(0.05);
});
tip10percent === null || tip10percent === void 0 ? void 0 : tip10percent.addEventListener("click", () => {
    tip(0.1);
});
tip15percent === null || tip15percent === void 0 ? void 0 : tip15percent.addEventListener("click", () => {
    tip(0.15);
});
tip25percent === null || tip25percent === void 0 ? void 0 : tip25percent.addEventListener("click", () => {
    tip(0.25);
});
tip50percent === null || tip50percent === void 0 ? void 0 : tip50percent.addEventListener("click", () => {
    tip(0.5);
});
billNum = parseFloat(billInput.value);
totalAmountNum = totalTip + (billNum / peopleInput.value);
totalAmount.textContent = `$${totalAmountNum}`;
//# sourceMappingURL=app.js.map