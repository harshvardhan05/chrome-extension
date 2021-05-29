const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const liEl = document.querySelector("#li-el")

let myLeads = []


inputBtn.addEventListener("click",()=>{
    myLeads.push(inputEl.value)
    ulEl.textContent = " "
    // console.log(myLeads)
    for(let i=0; i<myLeads.length; i++){
        ulEl.textContent += myLeads[i] 
    }
})

console.log(myLeads)