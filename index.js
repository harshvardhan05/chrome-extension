let myLeads = []
const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const delBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn")
//<----------------get the leads from localstorage---------------->
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


//<--------------get leads from the current tab --------->
tabBtn.addEventListener("click", function(){
// myLeads.push(window.location.href)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })    
})

//<-----checking leads from local storage ---------->
if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = null
//<----Save The Leads To Local Storage--->
    // myLeads = JSON.stringify(myLeads)
    // localStorage.setItem("myLeads", myLeads)
    // myLeads = JSON.parse(myLeads)          
    //      <------OR------->
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

//<-------------rendering leads --------->
function render(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
//   listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" +  myLeads[i]  + "</a></li>"
//<-----------Template String -------------->
         listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'> 
                    ${leads[i]} 
                </a>
            </li>
        ` 
    // console.log(listItems)
            //     another way of doing it is :
            //     create element
            //     set text content
            //     append to ul
            //    const li = document.createElement("li")
            //    li.textContent = myLeads[i]
            //    ulEl.append(li)
    }
    ulEl.innerHTML =  listItems 
} 

delBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
// ulEl.textContent = null
})