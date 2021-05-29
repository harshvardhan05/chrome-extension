const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
// const liEl = document.querySelector("#li-el")



let myLeads = []
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

let listItems = ""

for(let i=0; i<myLeads.length; i++){
    listItems += "<li>" +  myLeads[i]  + "</li>"
    
   /* another way of doing it is :
            create element
            set text content
            append to ul
    
   const liEl = document.createElement("li")
   liEl.textContent = myLeads[i]
   listItems.append(liEl)
   */
}
ulEl.innerHTML = listItems
