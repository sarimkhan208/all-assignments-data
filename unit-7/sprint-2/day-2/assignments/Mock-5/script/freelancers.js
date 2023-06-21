

const container = document.getElementById("container")
const sort = document.getElementById("sort")
const filter = document.getElementById("filter")

const searchBtn = document.getElementById("searchBtn")
const search = document.getElementById("search")

const profession = document.getElementById("profession")
const skills = document.getElementById("skills")
const editBtn = document.getElementById("editBtn")
const hour = document.getElementById("hour")
const editCont = document.getElementById("editCont")

function getFreelancersData(){
    fetch("https://freelancers-k7ac.onrender.com/freelancers")
    .then((res)=>res.json())
    .then((data)=>{
        storeData = data
        displayDOM(data)
    })
    .catch((err)=>console.log(err))
}


sort.addEventListener("change",function(){
    let val = sort.value
    if(val == "asc"){
        let data = storeData.sort(function(a,b){return a.hourlyRate-b.hourlyRate})
        displayDOM(data)
    }
    else if(val == "desc"){
        let data = storeData.sort(function(a,b){return b.hourlyRate-a.hourlyRate})
        displayDOM(data)
    }else{
        displayDOM(storeData)
    }
})


filter.addEventListener("change",function(){
    let val = filter.value
    console.log(val)
    if(val == "Student"){
        let data = storeData.filter((el)=>{
            if(el.profession == val){
                return el
            }
        })
        displayDOM(data)
    }
    else if(val == "Web Developer"){
        let data = storeData.filter((el)=>{
            if(el.profession == val){
                return el
            }
        })
        displayDOM(data)
    }else if(val == "Graphic Designer"){
        let data = storeData.filter((el)=>{
            if(el.profession == val){
                return el
            }
        })
        displayDOM(data)
    }else{
        displayDOM(data)
    }
})


searchBtn.addEventListener("click",function(){
    let val = search.value
    let data = storeData.filter((el)=>{
        if(el.name == val){
            return el
        }
    })
    if(data.length>0){
        displayDOM(data)
    }else{
        alert("No result Found")
    }
})


function displayDOM(data){
    container.innerHTML = null
    data.forEach((el)=>{
        let card = document.createElement("div")

        let img = document.createElement("img")
        let h1 = document.createElement("h1")
        let email = document.createElement("h3")
        let profession = document.createElement("h3")
        let skills = document.createElement("h3")
        let hourlyRate = document.createElement("h3")
        let bookingStatus = document.createElement("h3")
        let del = document.createElement("button")
        let edit = document.createElement("button")
        let hire = document.createElement("button")

        hire.addEventListener("click",function(){
            fetch(`https://freelancers-k7ac.onrender.com/freelancers/${el.id}`,{
                method : "PATCH",
                headers : {
                    "Content-Type" : "application/json"

                },
                body : JSON.stringify({isBooked : true})
            })
        })
        
        del.addEventListener("click",function(){
            fetch(`https://freelancers-k7ac.onrender.com/freelancers/${el.id}`,{
                method : "DELETE",
                headers : {
                    "Content-Type" : "application/json"
                }
            }).then((res)=>{
                getFreelancersData()
            })
            
        })

        edit.addEventListener("click",function(){
            editCont.style.display = "block"
            editBtn.addEventListener("click",function(){
                let obj = {
                    profession : profession.value,
                    hourlyRate : hour,
                    skills : skills
                }
    
                fetch(`https://freelancers-k7ac.onrender.com/freelancers/${el.id}`,{
                    method : "PATCH",
                    headers : {
                        "Content-Type" : "application/json"

                    },
                    body : JSON.stringify(obj)
                }).then((res)=>{
                    editCont.style.display = "none"
                    getFreelancersData()
                })

            })

        })

        img.setAttribute("src",el.profile)
        h1.innerText = el.name
        email.innerText = `Email : ${el.email}`
        profession.innerText = `Profeession : ${el.profession}`
        skills.innerText = `Skills : ${el.skills}`
        hourlyRate.innerText = `Hourly Rate : ${el.hourlyRate}`
        bookingStatus.innerText = `Booking Status : ${el.isBooked}`
        del.innerText = "Delete"
        edit.innerText = "Edit"
        hire.innerText = "Hire Me"
        
        card.append(img,h1,email,profession,skills,hourlyRate,bookingStatus,del,edit,hire)
        container.append(card)
    })

}

getFreelancersData()