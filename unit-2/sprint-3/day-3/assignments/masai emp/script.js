let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let filter=document.getElementById("filter");

let arrr = [];
form.addEventListener("submit",function(e){
    e.preventDefault();
    let obj = {
        name:form.name.value,
        id:form.employee_id.value,
        department:form.department.value,
        experience:form.experience.value,
        email:form.email.value,
        mobile:form.mobile.value
    }
    arrr.push(obj);
    createDOM(arrr);
})

filter.addEventListener("change",function(){
    let value =filter.value;
    if(value == "HR"){
        let res = arrr.filter(function(element,index){
            if(element.department == "HR"){
                return true;
            }
        })
        createDOM(res); 
    }
    else if(value == "Finance"){
        let res = arrr.filter(function(element,index){
            if(element.department == "Finance"){
                return true;
            }
        })
        createDOM(res); 
    }
    else if(value == "Engineering"){
        let res = arrr.filter(function(element,index){
            if(element.department == "Engineering"){
                return true;
            }
        })
        createDOM(res); 
    }
    else{
        createDOM(arrr); 
    }
    
})

function createDOM(dom){
    tbody.innerHTML=null;
    dom.forEach(function(e,i){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        td1.innerText = e.name;
        td2.innerText = e.id;
        td3.innerText = e.department;
        td4.innerText = e.experience;
        td5.innerText = e.email;
        td6.innerText = e.mobile;
        if(td4.innerText > 5){
            td7.innerText = "Senior"
        }
        else if(td4.innerText<=5 && td4.innerText>=2){
            td7.innerText = "Junior"
        }
        else if(td4.innerText<=1){
            td7.innerText = "Fresher"
        }
        td8.innerText = "Delete";
        td8.addEventListener("click",function(){
            let deleted = dom.filter(function(el,index){
                if(i==index){
                    return false;
                }else{
                    return true;
                }
            })
            arrr = deleted;
            createDOM(arrr)
        })
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(tr)
    })
}
