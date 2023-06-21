
let form  = document.querySelector("form");
let LSindex = JSON.parse(localStorage.getItem("task-list"))
if(LSindex == null) {LSindex = []};

form.addEventListener("submit",function(e){
    e.preventDefault();
    let obj = {
        name : form.name.value,
        desc : form.desc.value,
        sDate : form.start.value,
        eDate : form.end.value,
        priority : form.priority.value
    }
    LSindex.push(obj)
    localStorage.setItem("task-list",JSON.stringify(LSindex));
})
