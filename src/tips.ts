const tipCustom: any = document.querySelector(".custom")

let totalTip: number
function tip(tipValue: number): void {
	tipAmount?.textContent = `$${
		(parseFloat(billInput?.value) * tipValue) / peopleInput?.value
	}`
    totalTip = (parseFloat(billInput?.value) * tipValue) / peopleInput?.value
    // totalAmountNum = totalAmountNum + totalTip
}

// CUSTOM TIP
// let customTip : number; 
// tipCustom?.addEventListener("click", (): void => {
//     tipCustom.setAttribute("contenteditable", "true")
//     tipCustom.addEventListener("keypress", (e: any) => {
//         if (
// 			(e.keyCode <= 57 && e.keyCode >= 48) ||
// 			e.keyCode === 16 ||
// 			e.keyCode === 8 ||
// 			e.keyCode === 46
// 		) {
// 			// mozno pridat ctrl + v
// 			tipCustom.style.border = "none"
//             customTip = tipCustom.textContent
            
// 		} else {
// 			tipCustom.style.border = "2px red solid"
            
// 		}
//     })
    
// })