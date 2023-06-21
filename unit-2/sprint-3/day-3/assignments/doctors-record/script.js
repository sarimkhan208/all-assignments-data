let form = document.getElementById("form");
let tbody = document.querySelector("tbody");
let arr = [];
form.addEventListener("submit",function(e){
    e.preventDefault()
    let obj = {
        name : form.name.value,
        doctorId : form.doctor_id.value,
        specs : form.specialization.value,
        exp : form.experience.value,
        email : form.email.value,
        mobile : form.mobile.value,
    }
    arr.push(obj);
    createDOM(arr)
    function createDOM(arr){
        tbody.innerHTML = null;
        arr.forEach(function(element,index){
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            let td6 = document.createElement("td");
            let td7 = document.createElement("td");
            let td8 = document.createElement("td");
            td1.innerText = element.name;
            td2.innerText = element.doctorId;
            td3.innerText =  element.specs;
            td4.innerText = element.exp;
            td5.innerText = element.email;
            td6.innerText = element.mobile;
            if(td4.innerText > 5){
                td7.innerText = "Senior"
            }
            else if(td4.innerText<=5 && td4.innerText>=2){
                td7.innerText = "Junior"
            }
            else if(td4.innerText<=1){
                td7.innerText = "Trainee"
            }
            td8.innerText = "Delete";
            td8.addEventListener("click",function(){
                let deleted = arr.filter(function(el,i){
                    if(i == index){
                        return false;
                    }
                    else{
                        return true;
                    }
                })
                arr = deleted;
                createDOM(arr)
            })
            tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
            tbody.append(tr);
        })
    }
})
