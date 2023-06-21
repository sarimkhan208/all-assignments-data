let LSindex = JSON.parse(localStorage.getItem("todos"));
if(LSindex == null){LSindex=[]}
let todo = document.getElementById("todo")
let board = document.getElementById("board")
let cont = document.getElementById("container")
let LSDeleted = JSON.parse(localStorage.getItem("deleted-todos"))
if(LSDeleted == null){LSDeleted=[]}

function displayDOM(){
    // body.innerHTML = null
    cont.innerHTML=null
    LSindex.forEach(function(el,i){
        let h3 = document.createElement("h3")
        let desc = document.createElement("p")
        let addDate = document.createElement("p")
        let deadline = document.createElement("p")
        let del = document.createElement("button")
        let priority = document.createElement("p")
        let status = document.createElement("p")
        let div = document.createElement("div")
        
        h3.innerText = el.name;
        desc.innerText = el.desc
        addDate.innerText = el.addDate
        deadline.innerText = el.deadline
        priority.innerText = el.priority
        status.innerText = el.status
        del.innerText = "delete"
        del.addEventListener("click",function(){
            let deleted = LSindex.filter(function(element,index){
                if(element == el){
                    LSDeleted.push(el)
                    console.log(el)
                    localStorage.setItem("deleted-todos",JSON.stringify(LSDeleted))
                    return false
                }
                else{
                    return true
                }
            })
            LSindex = deleted
            localStorage.setItem("todos",JSON.stringify(LSindex))
            displayDOM(LSindex)
        })
        div.append(h3,desc,addDate,deadline,priority,status,del)
        cont.append(div)
        
    })
}
displayDOM()