const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("num-of-people");
const reset = document.querySelector(".reset-btn");

const tip5percent = document.querySelector(".tip5");
const tip10percent = document.querySelector(".tip10");
const tip15percent = document.querySelector(".tip15");
const tip25percent = document.querySelector(".tip25");
const tip50percent = document.querySelector(".tip50");
const tipCustom = document.querySelector(".custom");

const tipAmount = document.querySelector(".tip-amount-num");
const totalAmount = document.querySelector(".total-amount-num");

// BILL INPUT
billInput?.addEventListener("click", () => {
    billInput.removeAttribute("readonly")
    billInput.addEventListener("keyup", (e) => {
        if(e.keyCode <= 57 && e.keyCode >= 48 || e.keyCode === 16 || e.keyCode === 8 || e.keyCode === 46){
            // mozno pridat ctrl + v
            // console.log("spravny charcode")
            billInput.style.border = "none";
            totalAmount?.textContent = `$${billInput.value}`;
        }
        else{
            // billInput.value = "Must type numbers!"
            billInput.style.border = "2px red solid";
        }
    });
});

// PEOPLE INPUT
peopleInput?.addEventListener("click", () => {
    peopleInput.removeAttribute("readonly")
    peopleInput.addEventListener("keyup", (e) => {
        if(e.keyCode <= 57 && e.keyCode >= 48 || e.keyCode === 16 || e.keyCode === 8 || e.keyCode === 46){
            peopleInput.style.border = "none";
            // totalAmount?.textContent = parseInt(totalAmount?.textContent?.slice(1)) / parseInt(peopleInput.value);
            // console.log(totalAmount);
            // return
        }
        else{
            // billInput.value = "Must type numbers!"
            peopleInput.style.border = "2px red solid";
        }
    });
});

// TIPPING BUTTONS - cez costructructor!
tip5percent?.addEventListener("click", () => {
    tipAmount?.textContent = `$${(parseInt(billInput?.value) * 0.05 / peopleInput?.value)}`;
    
});