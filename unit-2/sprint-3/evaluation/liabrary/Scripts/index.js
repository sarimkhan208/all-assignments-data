let form = document.querySelector("form");
let LSindex = JSON.parse(localStorage.getItem("book-list")) || []
form.addEventListener("submit",function(e){
    e.preventDefault();
    let obj ={
        name : form.name.value,
        author : form.author.value,
        desc : form.desc.value,
        date : form.added.value,
        category : form.category.value,
        price : form.price.value
    }
    LSindex.push(obj);
    localStorage.setItem("book-list",JSON.stringify(LSindex));
})