// Write code for the Progress page here 
let tbody = document.querySelector("tbody");
let LSdash = JSON.parse(localStorage.getItem("priority-list"));
if(LSdash == null){LSdash = []};
let LSprogress = JSON.parse(localStorage.getItem("done-list"));
if(LSprogress == null){LSprogress = []};

function progressDOM(){
    tbody.innerHTML = null;
    LSdash.forEach(function(element,index){
        
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        td1.innerText = element.name;
        td2.innerText = element.desc;
        td3.innerText = element.sDate;
        td4.innerText = element.eDate;
        td5.innerText = element.priority;
        td6.innerText = "Add";
        td6.addEventListener("click",function(){
            let deleted = LSdash.filter(function(el,i){
                if(i == index){
                    LSprogress.push(el);
                    localStorage.setItem("done-list",JSON.stringify(LSprogress))
                    return false;
                }else{
                    return true;
                }
            })
            LSdash = deleted;
            localStorage.setItem("priority-list",JSON.stringify(LSdash));
            progressDOM(LSdash);
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        tbody.append(tr);
    })
}
progressDOM()