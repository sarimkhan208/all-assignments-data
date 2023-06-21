const freelancer = document.getElementById("freelancer")
const report = document.getElementById("report")

freelancer.addEventListener("click",function(){
    let isLogin = localStorage.getItem("login")

    if(isLogin){
        window.location.href = './freelancers.html'
    }else{
        window.location.href = './login.html'
    }
})

report.addEventListener("click",function(){
    let isLogin = JSON.parse(localStorage.getItem("login"))
    console.log(isLogin)
    if(isLogin){
        window.location.href = './report.html'
    }else{
        window.location.href = './login.html'
    }
})