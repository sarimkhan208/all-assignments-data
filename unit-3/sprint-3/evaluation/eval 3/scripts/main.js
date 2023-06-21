// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${ import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT ? import.meta.env.REACT_APP_JSON_SERVER_PORT : 9090 }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById('fetch-recipes');
let fetchEmployeesBtn = document.getElementById('fetch-employees');

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById("filter-more-than-equal-50");

let catsData = [];
// ***** Event listeners ***** //
window.addEventListener("load", () => {
    rendersCats()
  });

function rendersCats(){
    fetch(`${baseServerURL}/cats`)
    .then(function(res){return res.json()})
    .then(function(data){ return displayCats(data)})
}

function displayCats(data){
    let final = `<div class="card-list">

    ${data.map((item)=>{return createCard(item.name,item.cost,item.description,item.image,item.id)})}
    </div>`
    mainSection.innerHTML = final


}




function createCard(name,cost,description,image,id){
    let card = `<div class="card" data-id=${id}>
                    <div class="card-image">
                        <img src=${baseServerURL}/${image} alt="food">
                    </div>
                    <div class="card-body">
                        <h3 class="card-item card-title">${name}</h3>
                        <div class="card-item card-description">${description}</div>
                        <div class="card-item card-additional-info">${cost}</div>
                    </div>
                </div>`

    return card
}

// sorting A2Z

sortAtoZBtn.addEventListener("click",function(){
    fetch(`${baseServerURL}/cats`)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        sortFuntion(data)
    })
    function sortFuntion(data){
        data.sort(function(a,b){
            if(a.cost>b.cost){return 1}
            if(a.cost<b.cost){return -1}
            return 0
        })
        displayCats(data)
    }
})



sortZtoABtn.addEventListener("click",function(){
    fetch(`${baseServerURL}/cats`)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        sortFuntion(data)
    })
    function sortFuntion(data){
        data.sort(function(a,b){
            if(a.cost<b.cost){return 1}
            if(a.cost>b.cost){return -1}
            return 0
        })
        displayCats(data)
    }
})

// filter part

filterLessThan50Btn.addEventListener("click",function(){
    fetch(`${baseServerURL}/cats`)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        filterFuntion(data)
    })
    function filterFuntion(data){
        let filterdata = data.filter(function(item){
            if(item.cost<50){
                return true
            }
            else{
                return false
            }
        })
        displayCats(filterdata)
    }
})


filterMoreThanEqual50Btn.addEventListener("click",function(){
    fetch(`${baseServerURL}/cats`)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        filterFuntion(data)
    })
    function filterFuntion(data){
        let filterdata = data.filter(function(item){
            if(item.cost>=50){
                return true
            }
            else{
                return false
            }
        })
        displayCats(filterdata)
    }
})

// employess
fetchEmployeesBtn.addEventListener("click",function(){
    fetch(`${baseServerURL}/employees`)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        // console.log(data)
        displayEmployee(data)
    })


    function displayEmployee(data){
        mainSection.innerHTML = `<div class="card-list">
        ${data.map(function(item){return createEmp(item.name,item.salary,item.image,item.id)})}
    </div>`
    }

    function createEmp(name,salary,image,id){
        let card = `<div class="card" data-id=${id}>
            <div class="card-image">
                <img src = ${baseServerURL}/${image} alt="food>
            </div>
            <div class="card-body">
                <h3 class="card-item card-title">${name}</h3>
                <div class="card-item card-description"> ${salary}</div>
                <a href="#" data-id=${id} data-name=${name} langtry class="card-item card-link">Greet</a>
            </div>
        </div>`
        return card;
    }
    
})



// recipess
fetchRecipesBtn.addEventListener("click",function(){
    fetch(`${baseServerURL}/recipes?_page=1&_limit=25`)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        displayrecipe(data)
    })


    function displayrecipe(data){
        mainSection.innerHTML = `<div class="card-list">
        ${data.map(function(item){return createrecipe(item.name,item.price,item.image,item.id)})}
    </div>`
    }

    function createrecipe(name,salary,image,id){
        let card = `<div class="card" data-id=${id}>
            <div class="card-image">
                <img src = ${baseServerURL}/${image} alt="food>
            </div>
            <div class="card-body">
                <h3 class="card-item card-title">${name}</h3>
                <div class="card-item card-description"> ${salary}</div>
            </div>
        </div>`
        return card;
    }
    
})