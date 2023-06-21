// Write code for the Progress page here 

let LSpriority = JSON.parse(localStorage.getItem('priority-list')) || []
let LSdone = JSON.parse(localStorage.getItem('done-list')) || []


let tbody = document.querySelector('tbody')

function dashboardDOM(){
    tbody.innerHTML = null;
    LSpriority.forEach((el,i)=>{

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
            let add = LSpriority.filter((element,index)=>{
                if(i==index){
                    LSdone.push(element)
                    localStorage.setItem("done-list",JSON.stringify(LSdone))
                    return false
                }else{
                    return true
                }
            })
            localStorage.setItem("priority-list",JSON.stringify(add))
            LSpriority = add;
            dashboardDOM()

        })


        tr.append(td1,td2,td3,td4,td5,td6)
        tbody.append(tr)
    })
}

dashboardDOM()