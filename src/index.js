let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function Increment(){
    count += 1
    countEl.textContent = count
}

function Save(){
    saveEl.textContent += count + " - "
    countEl.textContent = 0
    count = 0

}
