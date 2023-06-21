const email = document.getElementById("email")
const password = document.getElementById("password")
const button = document.getElementById("button")
const container = document.getElementById("container")
let isShow = false

button.addEventListener("click",function(){

    let obj = {
        email : email.value,
        password : password.value
    }
    fetch("https://reqres.in/api/login",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(obj)
    }).then((res)=>{
        getData()
        
    }).catch((err)=>console.log(err))
})


function getData(){
    fetch('https://freelancers-k7ac.onrender.com/freelancers')
    .then((res)=>res.json())
    .then((data)=>{
        displayDOM(data)
        console.log(data)
    })
    .catch((err)=>console.log(err))
}

function displayDOM(data){
    let hourSum = 0
    let booked = 0
    for(let i=0; i<data.length; i++){
        hourSum+=data[i].hourlyRate
        if(data[i].isBooked){
            booked++
        }
    }
    container.innerHTML = null
    const table = document.createElement("table")
    const tr1 = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")

    td1.innerText = "Total Number of Register Freelancers"
    td2.innerText = `Number of Freelancers : ${data.length}`


    const tr2 = document.createElement("tr")
    const td3 = document.createElement("td")
    const td4 = document.createElement("td")

    td3.innerText = "Average Hourly Rate"
    td4.innerText = `${hourSum/data.length}`

    const tr3 = document.createElement("tr")
    const td5 = document.createElement("td")
    const td6 = document.createElement("td")
    td5.innerText = "Number of Booked and Available"
    td6.innerText = `Booked Freelancers : ${booked} Available Freelancers : ${data.length-booked}`

    tr1.append(td1,td2)
    tr2.append(td3,td4)
    tr3.append(td5,td6)
    table.append(tr1,tr2,tr3)
    container.append(table)

}
