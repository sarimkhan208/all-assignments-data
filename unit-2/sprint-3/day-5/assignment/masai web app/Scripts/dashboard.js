let filter = document.getElementById("filter");
let LSindex = JSON.parse(localStorage.getItem("task-list"));
if(LSindex == null) {LSindex = []};
let LSdash = JSON.parse(localStorage.getItem("priority-list"));
let taskcount = document.getElementById("task-count");
if(LSdash == null){LSdash = []};
let tbody = document.querySelector("tbody");

filter.addEventListener("change",filterfun);
function filterfun(){
    let value = filter.value
    if(value == "Low"){
        LSindex = LSindex.filter(function(ele){
            return ele.priority == "Low"
        })
        dashDOM()
        LSindex = JSON.parse(localStorage.getItem("task-list"));
    }
    else if(value == "Medium"){
        LSindex = LSindex.filter(function(ele){
            return ele.priority == "Medium"
        })
        dashDOM()
        LSindex = JSON.parse(localStorage.getItem("task-list"));
    }
    else if(value == "High"){
        LSindex = LSindex.filter(function(ele){
            return ele.priority == "High"
        })
        dashDOM()
        LSindex = JSON.parse(localStorage.getItem("task-list"));
    }
    else{
        dashDOM()
        LSindex = JSON.parse(localStorage.getItem("task-list"));
    }
}

function dashDOM(){
    tbody.innerHTML = null;
    LSindex.forEach(function(element,index){
        
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
            let deleted = LSindex.filter(function(el,i){
                if(i == index){
                    LSdash.push(el);
                    localStorage.setItem("priority-list",JSON.stringify(LSdash))
                    return false;
                }else{
                    return true;
                }
            })
            LSindex = deleted;
            localStorage.setItem("task-list",JSON.stringify(LSindex));
            dashDOM(LSindex);
        })
        
        taskcount.innerText = LSindex.length;
        tr.append(td1,td2,td3,td4,td5,td6)
        tbody.append(tr);
    })
}
dashDOM()