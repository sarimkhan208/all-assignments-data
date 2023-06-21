// Write code related to Done page here

// Write code related to dashboard page here

let LSdone= JSON.parse(localStorage.getItem('done-list')) || []

let tbody = document.querySelector('tbody')

function dashboardDOM(){
    tbody.innerHTML = null;
    LSdone.forEach((el,i)=>{

        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5= document.createElement("td")

        td1.innerText = el.name
        td2.innerText = el.desc
        td3.innerText = el.start
        td4.innerText = el.end
        td5.innerText = el.priority

        tr.append(td1,td2,td3,td4,td5)
        tbody.append(tr)
    })
}

dashboardDOM()