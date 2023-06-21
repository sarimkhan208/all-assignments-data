
let LSindex = JSON.parse(localStorage.getItem("todos"))
if(LSindex == null){LSindex=[]}
let form = document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault()
    let obj = {
        name:this.name.value,
        desc:desc.value,
        addDate : addDate.value,
        deadline : deadline.value,
        priority : priority.value,
        status : "todo"
    }
    LSindex.push(obj);
    localStorage.setItem("todos",JSON.stringify(LSindex))
})
