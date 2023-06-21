let LSindex = JSON.parse(localStorage.getItem("book-list"));
if(LSindex == null){LSindex = []};
let LSbuy = JSON.parse(localStorage.getItem("buy-list"));
if(LSbuy == null){LSbuy = []};
let count = document.getElementById("book-count");
let LSbm = JSON.parse(localStorage.getItem("bookmark-list"));
if(LSbm == null){LSbm = []};
let filter = document.getElementById("filter")


filter.addEventListener("change",function(){
    let value = filter.value;
    if(value == "Fiction"){
        let cat = LSindex.filter(function(e,i){
            if(e.category == "Fiction"){
                return true;
            }
        })
        LSindex = cat;
        dashDOM(cat);
        LSindex= JSON.parse(localStorage.getItem("book-list"));
    }
    else if(value == "Self Help"){
        let cat = LSindex.filter(function(e,i){
            if(e.category == "Self Help"){
                return true;
            }
        })
        LSindex = cat;
        dashDOM(cat);
        LSindex=JSON.parse(localStorage.getItem("book-list"));
    }
    else if(value == "Finance"){
        let cat = LSindex.filter(function(e,i){
            if(e.category == "Finance"){
                return true;
            }
        })
        LSindex = cat;
        dashDOM(cat);
        LSindex=JSON.parse(localStorage.getItem("book-list"));
    }
    else{
        dashDOM();
        LSindex=JSON.parse(localStorage.getItem("book-list"));
    }
})




let tbody = document.querySelector("tbody");
function dashDOM(){
    tbody.innerHTML = null;
    LSindex.forEach(function(el,i){
        
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
        td6.innerText = "Buy";
        td6.addEventListener("click",function(){
            let buy = LSindex.filter(function(element,index){
                if(i==index){
                    LSbuy.push(element);
                    localStorage.setItem("buy-list",JSON.stringify(LSbuy))
                    return false
                }
                else{
                    return true;
                }
            })
            LSindex=buy;
            dashDOM(buy);
        })
        td7.innerText = "Add";
        td7.addEventListener("click",function(){
            let add = LSindex.filter(function(element,index){
                if(i==index){
                    LSbm.push(element);
                    localStorage.setItem("bookmark-list",JSON.stringify(LSbm))
                    return false
                }
                else{
                    return true;
                }
            })
            LSindex = add;
            dashDOM(add);
        })
        td8.innerText = el.price;
        count.innerText = LSindex.length
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(tr);
    })
}
dashDOM();