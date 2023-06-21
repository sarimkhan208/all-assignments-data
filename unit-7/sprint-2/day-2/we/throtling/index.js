
const search = document.getElementById("search")

function throt(fn,delay){
    console.log("sli")

    search.disabled = true
    return function(...args){
        let timer
        if(timer)clearTimeout(timer)
        timer = setTimeout(()=>{
            fn()
        },delay)

    }
}

search.addEventListener("click",()=>{
    throt(()=>{
        search.disabled = false
        console.log("clicked")
    },3000)
})
