

const getData = ()=>{
    console.log("fetching Data")
    fetch('http://localhost:8080/posts')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
    })


}


const debounce = (fn,delay)=>{
    let timer;
    return function(...arg){
        if(timer)clearTimeout(timer)
        timer = setTimeout(()=>{
            fn()
        },delay)
    }

}

const optimise = debounce(getData,1000)