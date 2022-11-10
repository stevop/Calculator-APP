"use strict";
const tipCustom = document.querySelector(".custom");
let totalTip;
function tip(tipValue) {
    tipAmount === null || tipAmount === void 0 ? void 0 : tipAmount.textContent = `$${(parseFloat(billInput === null || billInput === void 0 ? void 0 : billInput.value) * tipValue) / (peopleInput === null || peopleInput === void 0 ? void 0 : peopleInput.value)}`;
    totalTip = (parseFloat(billInput === null || billInput === void 0 ? void 0 : billInput.value) * tipValue) / (peopleInput === null || peopleInput === void 0 ? void 0 : peopleInput.value);
}
//# sourceMappingURL=tips.js.map