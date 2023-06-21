//add your js code here//add your js code here/

const tbody = document.querySelector('tbody');
const filter = document.getElementById('year')
const team1 = document.getElementById('team1')
const team2 = document.getElementById('team2')

let storeData
let year = 2011
let team1store="",team2store="";





// year=${year}&team1=${team1store}&team2=${team2store}
function fetchData(){
    if(team1store && team2store){
        console.log(team1store,team2store)
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team1store}&team2=${team2store}`)
    .then((res)=>res.json())
    
    .then((data)=>{
        renderDom(data.data)
    })
    .catch((err)=>console.log(err))
    }else if(team1store){
        console.log(team1store)
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team1store}`)
    .then((res)=>res.json())
    
    .then((data)=>{
        renderDom(data.data)
    })
    .catch((err)=>console.log(err))
    }else if(team2store){
        console.log(team1store,team2store)
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team2store}`)
    .then((res)=>res.json())
    
    .then((data)=>{
        renderDom(data.data)
    })
    .catch((err)=>console.log(err))
    }else{
        console.log(team1store,team2store)
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}`)
    .then((res)=>res.json())
    
    .then((data)=>{
        renderDom(data.data)
    })
    .catch((err)=>console.log(err))

    }
}

fetchData()


filter.addEventListener("change",function(){
    year = filter.value
    fetchData(filter.value)
})

team1.addEventListener("change",function(){
    console.log(team1.value)
    if(team1.value){
        team1store = team1.value
        fetchData(team1.value)
    }
})


team2.addEventListener("change",function(){
    if(team2.value){
        team2store = team2.value
        fetchData(team2.value)
    }
})



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

