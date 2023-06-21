
let form = document.querySelector("form");
let heading = document.querySelector("h1");
let LSdata = JSON.parse(localStorage.getItem("data"));
if(LSdata == null){LSdata=[]}
form.addEventListener("submit",function(e){
    e.preventDefault()
    let obj = {
        uniqueID : uniqueID.value,
        firstname : firstname.value,
        age : age.value,
        designation : designation.value,
        vaccine :vaccine.value
    }

    if(check(uniqueID.value)){
        alert("duplicate ID are not allowed");
    }
    else if(firstname.value.length < 4){
        alert("Name should be at least 4 characters.")
    }
    else if(age.value < 18 || age.value > 40){
        alert("age should be in between 18-40")
    }
    else{
        heading.innerText = "Registration Successful"
        LSdata.push(obj);
        localStorage.setItem("data",JSON.stringify(LSdata))
    }
})

function check(id){
    for(let i=0; i<LSdata.length; i++){
        if(id == LSdata[i].uniqueID){
            return true;
        }
    }
}