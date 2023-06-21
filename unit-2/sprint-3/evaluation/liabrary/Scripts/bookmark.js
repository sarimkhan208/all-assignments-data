
let tbody = document.querySelector("tbody");
let LSbm = JSON.parse(localStorage.getItem("bookmark-list"));
if(LSbm == null){LSbm = []};

function bmDOM(){
    tbody.innerHTML = null;
    LSbm.forEach(function(el,i){
        
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2= document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        td1.innerText = el.name;
        td2.innerText = el.author;
        td3.innerText = el.desc;
        td4.innerText = el.date;
        td5.innerText = el.category;
        td6.innerText = el.price;
        tr.append(td1,td2,td3,td4,td5,td6);
        tbody.append(tr);
    })
}
bmDOM();