// Write code for the Progress page here 
let tbody = document.querySelector("tbody");
let LSdone = JSON.parse(localStorage.getItem("done-list"));
if(LSdone == null){LSdone = []};

function doneDOM(){
    tbody.innerHTML = null;
    LSdone.forEach(function(element){
        
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        td1.innerText = element.name;
        td2.innerText = element.desc;
        td3.innerText = element.sDate;
        td4.innerText = element.eDate;
        td5.innerText = element.priority;
        tr.append(td1,td2,td3,td4,td5)
        tbody.append(tr);
    })
}
doneDOM()