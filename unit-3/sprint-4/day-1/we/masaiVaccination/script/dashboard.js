
let sort = document.getElementById("sort");
let filter = document.getElementById("filter")
let LSindex = JSON.parse(localStorage.getItem("data"));
if(LSindex == null) {LSindex = []};


let LSvaccinated = JSON.parse(localStorage.getItem("vaccinated"));
let taskcount = document.getElementById("task-count");
if(LSvaccinated == null){LSvaccinated = []};


let tbody = document.querySelector("tbody");

// filter.addEventListener("change",function(){
//     let value = filter.value
//     let filterData = LSindex.filter(function(el){
//         if(value == el.vaccine){
//             return true
//         }else{
//             return false
//         }
//     })
//     LSindex = filterData
//     console.log(LSindex)
//     console.log(filterData)
//     displayDOM()
// });


filter.addEventListener("change",function(){
    let value =filter.value;
    if(value == "Covishield"){
        let res = LSindex.filter(function(element,index){
            if(element.vaccine == "Covishield"){
                return true;
            }
        })
        LSindex = res
        displayDOM()
    }
    else if(value == "Covaxin"){
        let res = LSindex.filter(function(element,index){
            if(element.vaccine  == "Covaxin"){
                return true;
            }
        })
        LSindex = res
        displayDOM() 
    }
    else if(value == "Sputnik"){
        let res = LSindex.filter(function(element,index){
            if(element.vaccine == "Sputnik"){
                return true;
            }
        })
        LSindex = res
        displayDOM()
    }
    else{
        displayDOM() 
    }
    
})
    
    // else if(value == "Covaxin"){
    //     LSindex = LSindex.filter(function(ele){
    //         return ele.vaccine == "Covaxin"
    //     })
    //     displayDOM()
    //     LSindex = JSON.parse(localStorage.getItem("vaccinated"));
    // }
    // else if(value == "Sputnik"){
    //     LSindex = LSindex.filter(function(ele){
    //         return ele.vaccine == "Sputnik"
    //     })
    //     displayDOM()
    //     LSindex = JSON.parse(localStorage.getItem("vaccinated"));
    // }
    // else{
    //     displayDOM()
    //     LSindex = JSON.parse(localStorage.getItem("vaccinated"));
    // }
// }

sort.addEventListener("click",function(){
    sortfunction(LSindex);
    function sortfunction(data){
        data.sort((a, b) => {
          if (a.age > b.age) return 1;
          if (a.age < b.age) return -1;
          return 0;
        });
        LSindex = data;
        displayDOM()
      }
})
function displayDOM(){
    tbody.innerHTML = null;
    LSindex.forEach(function(element,index){
        
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        td1.innerText = element.uniqueID;
        td2.innerText = element.firstname;
        td3.innerText = element.age;
        td4.innerText = element.designation;
        td5.innerText = element.vaccine;
        td6.innerText = "Delete";
        td7.innerText = "Vaccinated"
        td6.setAttribute("class","red")
        td7.setAttribute("class","green")
        td6.addEventListener("click",function(){
            let deleted = LSindex.filter(function(el,i){
                if(i == index){
                    return false;
                }else{
                    return true;
                }
            })
            LSindex = deleted;
            localStorage.setItem("data",JSON.stringify(LSindex));
            displayDOM(LSindex);
        })
        
        td7.addEventListener("click",function(){
            let name,vaccineName;
            let vacci = LSindex.filter(function(el,i){
                if(i == index){
                    name = el.firstname
                    vaccineName = el.vaccine
                    LSvaccinated.push(el);
                    localStorage.setItem("vaccinated",JSON.stringify(LSvaccinated))
                    return false;
                }else{
                    return true;
                }
            })
            alert(`${name} Added to Queue`)
            setTimeout(function(){
                alert(`Vaccinating ${vaccineName}`)
            },5000)
            setTimeout(function(){
                alert(`Vaccinated ${name}`)
            },10000)

            LSindex = vacci;
            localStorage.setItem("data",JSON.stringify(LSindex));
            displayDOM(LSindex);
        })
        
        tr.append(td1,td2,td3,td4,td5,td6,td7)
        tbody.append(tr);
    })
}
displayDOM()
