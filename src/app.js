var billInput = document.getElementById("bill");
var peopleInput = document.getElementById("num-of-people");
var reset = document.querySelector(".reset-btn");
var tip5percent = document.querySelector(".tip5");
var tip10percent = document.querySelector(".tip10");
var tip15percent = document.querySelector(".tip15");
var tip25percent = document.querySelector(".tip25");
var tip50percent = document.querySelector(".tip50");
var tipCustom = document.querySelector(".custom");
var tipAmount = document.querySelector(".tip-amount-num");
var totalAmount = document.querySelector(".total-amount-num");
// BILL INPUT
billInput === null || billInput === void 0 ? void 0 : billInput.addEventListener("click", function () {
    billInput.removeAttribute("readonly");
    billInput.addEventListener("keyup", function (e) {
        if (e.keyCode <= 57 && e.keyCode >= 48 || e.keyCode === 16 || e.keyCode === 8 || e.keyCode === 46) {
            // mozno pridat ctrl + v
            // console.log("spravny charcode")
            billInput.style.border = "none";
            totalAmount === null || totalAmount === void 0 ? void 0 : totalAmount.textContent = "$".concat(billInput.value);
        }
        else {
            // billInput.value = "Must type numbers!"
            billInput.style.border = "2px red solid";
        }
    });
});
// PEOPLE INPUT
peopleInput === null || peopleInput === void 0 ? void 0 : peopleInput.addEventListener("click", function () {
    peopleInput.removeAttribute("readonly");
    peopleInput.addEventListener("keyup", function (e) {
        if (e.keyCode <= 57 && e.keyCode >= 48 || e.keyCode === 16 || e.keyCode === 8 || e.keyCode === 46) {
            peopleInput.style.border = "none";
            // totalAmount?.textContent = parseInt(totalAmount?.textContent?.slice(1)) / parseInt(peopleInput.value);
            // console.log(totalAmount);
            // return
        }
        else {
            // billInput.value = "Must type numbers!"
            peopleInput.style.border = "2px red solid";
        }
    });
});
// TIPPING BUTTONS - cez costructructor!
tip5percent === null || tip5percent === void 0 ? void 0 : tip5percent.addEventListener("click", function () {
    tipAmount === null || tipAmount === void 0 ? void 0 : tipAmount.textContent = "$".concat((parseInt(billInput === null || billInput === void 0 ? void 0 : billInput.value) * 0.05 / (peopleInput === null || peopleInput === void 0 ? void 0 : peopleInput.value)));
});
