let LSDeleted = JSON.parse(localStorage.getItem("deleted-todos"))
let tbody = document.querySelector("tbody")
if(LSDeleted == null){LSDeleted = []}

function displayDOM(){
    LSDeleted.forEach(function(el,i){
        let name = document.createElement("td")
        let desc = document.createElement("td")
        let addDate = document.createElement("td")
        let deadline = document.createElement("td")
        let priority = document.createElement("td")
        let status = document.createElement("td")
        let tr = document.createElement("tr")
        name.innerText = el.name;
        desc.innerText = el.desc;
        addDate.innerText = el.addDate;
        deadline.innerText = el.deadline;
        priority.innerText = el.priority
        status.innerText=el.status
        tr.append(name,desc,addDate,deadline,priority,status)
        tbody.append(tr)
    })
}
displayDOM()
