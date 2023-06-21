//add your js code here/

const tbody = document.querySelector('tbody');

const prev = document.getElementById("prev")
const next = document.getElementById("next")

let page=1



function fetchData(page){
    fetch(`https://jsonmock.hackerrank.com/api/football_matches?page=${page}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        renderDom(data.data)
    })
    .catch((err)=>console.log(err))
}

fetchData(page)


function renderDom(data){
    tbody.innerHTML = null

    data.forEach((el)=>{

        let tr = document.createElement('tr')

        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        let td7 = document.createElement('td')

        td1.innerText = el.competition
        td2.innerText = el.round
        td3.innerText = el.team1  
        td4.innerText = el.team1goals
        td5.innerText = el.team2
        td6.innerText = el.team2goals
        td7.innerText = el.year

        tr.append(td1,td2,td3,td4,td5,td6,td7)
        tbody.append(tr)
    })
}


prev.addEventListener("click",function(){
    console.log("fsdf")
    page = page-1
    fetchData(page)
})

next.addEventListener("click",function(){
    page = page+1
    console.log(page)
    fetchData(page)
})