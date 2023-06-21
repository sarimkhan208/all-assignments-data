
let sort = document.getElementById("sort");
let filter = document.getElementById("filter")
let LSindex = JSON.parse(localStorage.getItem("vaccinated"));
if(LSindex == null) {LSindex = []};


let tbody = document.querySelector("tbody");

filter.addEventListener("change",filterfun);
function filterfun(){
    let value = filter.value
    if(value == "Covishield"){
        LSindex = LSindex.filter(function(ele){
            return ele.vaccine == "Covishield"
        })
        displayDOM()
        LSindex = JSON.parse(localStorage.getItem("vaccinated"));
    }
    else if(value == "Covaxin"){
        LSindex = LSindex.filter(function(ele){
            return ele.vaccine == "Covaxin"
        })
        displayDOM()
        LSindex = JSON.parse(localStorage.getItem("vaccinated"));
    }
    else if(value == "Sputnik"){
        LSindex = LSindex.filter(function(ele){
            return ele.vaccine == "Sputnik"
        })
        displayDOM()
        LSindex = JSON.parse(localStorage.getItem("vaccinated"));
    }
    else{
        displayDOM()
        LSindex = JSON.parse(localStorage.getItem("vaccinated"));
    }
}

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
        td1.innerText = element.uniqueID;
        td2.innerText = element.firstname;
        td3.innerText = element.age;
        td4.innerText = element.designation;
        td5.innerText = element.vaccine;
        
        tr.append(td1,td2,td3,td4,td5)
        tbody.append(tr);
    })
}
displayDOM()
