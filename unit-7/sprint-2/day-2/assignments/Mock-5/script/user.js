const namee = document.getElementById("name")
const profile = document.getElementById("profile")
const email = document.getElementById("email")
const password= document.getElementById("password")
const skills= document.getElementById("skills")
const profession= document.getElementById("profession")
const hourlyRate = document.getElementById("hourly-rate")
const registerBtn = document.getElementById("registerBtn")

registerBtn.addEventListener("click",function(){

    let obj = {
        name : namee.value,
        profile : profile.value,
        email : email.value,
        password : password.value,
        profession : profession.value,
        skills : skills.value.split(" "),
        hourlyRate : hourlyRate.value,
        isBooked : false
    }
    fetch('https://freelancers-k7ac.onrender.com/freelancers',{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(obj)
    })
    alert("Registeration Successfull")
    
})