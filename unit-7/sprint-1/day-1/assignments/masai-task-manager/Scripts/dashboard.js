// Write code related to dashboard page here

let LSindex = JSON.parse(localStorage.getItem('task-list')) || []
let LSadd = JSON.parse(localStorage.getItem('priority-list')) || []
let taskcount = document.getElementById("task-count")
let filter = document.getElementById("filter")

filter.addEventListener("change",function(){
    let value = filter.value;
    if(value == "Low"){
        let data = LSindex.filter((e,i)=>{
            if(e.priority == value){
                return true
            }
        })
        LSindex = data;
        dashboardDOM()
        LSindex = JSON.parse(localStorage.getItem('task-list'))
    }

    else if(value == "Medium"){
        let data = LSindex.filter((e,i)=>{
            if(e.priority == value){
                return true
            }
        })
        LSindex = data;
        dashboardDOM()
        LSindex = JSON.parse(localStorage.getItem('task-list'))
    }

    else if(value == "High"){
        let data = LSindex.filter((e,i)=>{
            if(e.priority == value){
                return true
            }
        })
        LSindex = data;
        dashboardDOM()
        LSindex = JSON.parse(localStorage.getItem('task-list'))
    }else{
        LSindex = JSON.parse(localStorage.getItem('task-list'))
        dashboardDOM()
    }
})


let tbody = document.querySelector('tbody')

function dashboardDOM(){
    tbody.innerHTML = null;
    LSindex.forEach((el,i)=>{

        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5= document.createElement("td")
        let td6 = document.createElement("td")

        td1.innerText = el.name
        td2.innerText = el.desc
        td3.innerText = el.start
        td4.innerText = el.end
        td5.innerText = el.priority
        td6.innerText = "Add"

        td6.addEventListener("click",function(){
            let add = LSindex.filter((element,index)=>{
                if(i==index){
                    LSadd.push(element)
                    localStorage.setItem("priority-list",JSON.stringify(LSadd))
                    return false
                }else{

                    return true
                }
            })
            localStorage.setItem("task-list",JSON.stringify(add))
            LSindex = add;
            dashboardDOM()

        })

        tr.append(td1,td2,td3,td4,td5,td6)
        tbody.append(tr)
        taskcount.innerText = LSindex.length
    })
}

dashboardDOM()