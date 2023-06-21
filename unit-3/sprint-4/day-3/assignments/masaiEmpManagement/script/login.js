let loginBtn = document.getElementById("submit");
loginBtn.addEventListener("click",function(e){
    e.preventDefault()
    // let email = document.getElementById("emial").value;
    // let passowrd = document.getElementById("passowrd").value;
    // fetch(`https://reqres.in/api/login`)
    // .then(function(res){
    //     return res.json()
    // })
    // .then(function(data){
    //     console.log(data.data) 
    // })
    window.location.href="employee.html"

})