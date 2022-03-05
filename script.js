//store the count first
//then initialized the value to zero
//add event listener that listens for click when buttons like increment is clicked by inserting onclick with function name eg onClick="xxx()"
//innerText or textContent is to allow the inner content to show


let count = 0
let countEl = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")



function increment() {
   count += 1
   countEl.textContent = count
}
function save(){
    let countStr = count + " - "
    saveEL.textContent += countStr
    countEl.textContent = 0
    count = 0
   
}


