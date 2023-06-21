
let baseURL = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees"
let container = document.getElementById("container");
let filter = document.getElementById("filter");
let sort = document.getElementById("sort");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let filterstore = [];

// FILTER FUNC

filter.addEventListener("change",function(){
    let val = filter.value;
    if(val=="Engineering"){
        let filteredData = filterstore.filter(function(el){
            if(el.department == "engineering"){
                return true
            }
            else{
                return false
            }
        })
        displayData(filteredData)
    }
    else if(val=="Operation"){
        let filteredData = filterstore.filter(function(el){
            if(el.department == "operations"){
                return true
            }
            else{
                return false
            }
        })
        displayData(filteredData)
    }
    else if(val=="Finance"){
        let filteredData = filterstore.filter(function(el){
            if(el.department == "finance"){
                return true
            }
            else{
                return false
            }
        })
        displayData(filteredData)
    }
    else if(val=="Marketing"){
        let filteredData = filterstore.filter(function(el){
            if(el.department == "marketing"){
                return true
            }
            else{
                return false
            }
        })
        displayData(filteredData)
    }

})

// SORT
sort.addEventListener("click",function(){
    sortfunction(filterstore)
    function sortfunction(data){
      data.sort((a, b) => {
        // console.log(a.name)
        if (a.salary > b.salary) return 1;
        if (a.salary < b.salary) return -1;
        return 0;
      });
      displayData(data)
    }
})
  


// SEARCH
searchBtn.addEventListener("click",function(){
    for(let i=0; i<100; i++){
        if(filterstore[i].name == searchInput.value){
            displayData([filterstore[i]])
            break;
        }
        
    }
})
function fetchingData(){
    fetch(`${baseURL}`)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        filterstore = data.data
        displayData(data.data)
    })
}
fetchingData(baseURL)



function displayData(data){
    container.innerHTML=null
    let val = `<div>
                    ${data.map(function(el){return getData(el.name,el.department,el.gender,el.salary)}).join("")}
                </div>`
    container.innerHTML = val            
}

function getData(name,department,gender,salary){
    let card = `
    <div class = "card">
      <div class = "card_img">
        <img src= "https://imgs.search.brave.com/PU8K8RwvFBMHTJOTV8FgN4UtdoT_5lZpIW9qIaI5MHg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/ak5ISkw2QS1Mendf/akxKZkZndE13SGFF/SyZwaWQ9QXBp">   
      </div>
      <div class = "card_body">
            <div class="name">Name : ${name}</div>
            <div class="name">Department : ${department}</div>
            <div class="name">Gender : ${gender}</div>
            <div class="name">Salary : ${salary}</div>
        </div>
    </div>
  `
  return card

    
}




