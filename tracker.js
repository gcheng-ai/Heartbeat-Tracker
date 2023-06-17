let countEl = document.getElementById("count-display")
let saveEl = document.getElementById("save-el")
let count = 0

//everytime the increment-btn is clicked, the function is invoked, and increase the count by 1
function increment() {
    count += 1 
    //the count display changes according to the count increased
    countEl.textContent = count
}

function save(){
    let countStr = count + "- " // ensure every save is separated by a "-"
    saveEl.innerText += countStr
    count = 0
    countEl.textContent = 0
}
