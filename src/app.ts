const billInput: any = document.getElementById("bill")
const peopleInput: any = document.getElementById("num-of-people")
const reset = document.querySelector(".reset-btn")

const tip5percent = document.querySelector(".tip5")
const tip10percent = document.querySelector(".tip10")
const tip15percent = document.querySelector(".tip15")
const tip25percent = document.querySelector(".tip25")
const tip50percent = document.querySelector(".tip50")

const tipAmount: any = document.querySelector(".tip-amount-num")
const totalAmount: any = document.querySelector(".total-amount-num")

let totalAmountNum: number = totalAmount.textContent

// BILL INPUT
let billNum: number
billInput?.addEventListener("click", () => {
	billInput.removeAttribute("readonly")
	billInput.addEventListener("keyup", (e: any) => {
		if (
			(e.keyCode <= 57 && e.keyCode >= 48) ||
			e.keyCode === 16 ||
			e.keyCode === 8 ||
			e.keyCode === 46
		) {
			// mozno pridat ctrl + v
			billInput.style.border = "none"
			billNum = parseFloat(billInput.value)
			totalAmountNum = billNum / peopleInput.value
			totalAmount.textContent = `$${totalAmountNum}`
		} else {
			billInput.style.border = "2px red solid"
		}
	})
})

// PEOPLE INPUT
peopleInput?.addEventListener("click", () => {
	peopleInput.removeAttribute("readonly")
	peopleInput.addEventListener("keyup", (e: any) => {
		if (
			(e.keyCode <= 57 && e.keyCode >= 48) ||
			e.keyCode === 16 ||
			e.keyCode === 8 ||
			e.keyCode === 46
		) {
			peopleInput.style.border = "none"

		} else {
			peopleInput.style.border = "2px red solid"
		}
	})
})

// TIPPING BUTTONS - cez costructructor!
tip5percent?.addEventListener("click", () => {
	tip(0.05)
})
tip10percent?.addEventListener("click", () => {
	tip(0.1)
})
tip15percent?.addEventListener("click", () => {
	tip(0.15)
})
tip25percent?.addEventListener("click", () => {
	tip(0.25)
})
tip50percent?.addEventListener("click", () => {
	tip(0.5)
})

// TOTAL AMOUNT TO PAY

billNum = parseFloat(billInput.value)
totalAmountNum = totalTip + (billNum / peopleInput.value)
totalAmount.textContent = `$${totalAmountNum}`
