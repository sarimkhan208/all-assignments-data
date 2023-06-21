// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const bookURL = `${baseServerURL}/books`;
let mainSection = document.getElementById("data-list-wrapper");

// book
let bookTitleInput = document.getElementById("book-title");
let bookImageInput = document.getElementById("book-image");
let bookCategoryInput = document.getElementById("book-category");
let bookAuthorInput = document.getElementById("book-author");
let bookPriceInput = document.getElementById("book-price");
let bookCreateBtn = document.getElementById("add-book");

// Update book
let updateBookIdInput = document.getElementById("update-book-id");
let updateBookTitleInput = document.getElementById("update-book-title");
let updateBookImageInput = document.getElementById("update-book-image");
let updateBookAuthorInput = document.getElementById("update-book-author");
let updateBookCategoryInput = document.getElementById("update-book-category");
let updateBookPriceInput = document.getElementById("update-book-price");
let updateBookBtn = document.getElementById("update-book");

//Update price
let updatePriceBookId = document.getElementById("update-price-book-id");
let updatePriceBookPrice = document.getElementById("update-price-book-price");
let updatePriceBookPriceButton = document.getElementById("update-price-book");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterClassic = document.getElementById("filter-Classic");
let filterFantasy = document.getElementById("filter-Fantasy");
let filterMystery = document.getElementById("filter-Mystery");

//Search by title/author

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Books Data
let booksData = [];

const deleteCard = (id)=>{
  console.log("ok")
}


function getData(){
  fetch(`${bookURL}`)
  .then((res)=>res.json())
  .then((data)=>{
    // console.log(data)
    booksData = data
    DisplayDOM(data)
  })
}
getData()

function DisplayDOM(mydata){
  console.log(mydata)
  mainSection.innerHTML = null
  mydata.forEach((el)=>{
    const card = document.createElement("div")
    card.className = 'card'
    card.setAttribute("data-id",el.id)
    // card.dataset = el.id

    const cardImg = document.createElement("div")
    cardImg.className = 'card-img'

    const img = document.createElement("img")
    img.setAttribute("src",el.image)
    cardImg.append(img)

    const cardBody = document.createElement("div")
    cardBody.className = 'card-body'

    const heading = document.createElement("h4")
    heading.className = "card-title"
    const p1 = document.createElement("p")
    heading.className = "card-author"
    const p2 = document.createElement("p")
    heading.className = "card-category"
    const p3 = document.createElement("p")
    heading.className = "card-price"

    const a = document.createElement("a")
    a.className = "card-link"
    a.setAttribute("href", "fsdf");
    a.setAttribute("data-id",el.id)
    // a.dataset = el.id
    a.innerText = "Edit"


    const button = document.createElement("button")
    button.innerText = "delete"
    button.setAttribute("data-id",el.id)
    button.className = 'card-button'
    button.addEventListener("click",function(){
      console.log(el.id)
    })

    heading.innerText = el.title
    p1.className = "card-author"
    p2.className = "card-category"
    p3.className = "card-price"
    p1.innerText = el.author
    p2.innerText = el.category
    p3.innerText = el.price


    cardBody.append(heading,p1,p2,p3,a,button)


    card.append(cardImg,cardBody)
    mainSection.append(card)
  })



  // mainSection.innerHTML = null
  // let val = `<div class='card-list' >
  //     ${data.map(function(el){return createCard(el.author,el.category,el.id,el.image,el.price,el.title)}).join("")}
  // </div>`
  // mainSection.innerHTML = val

}



function createCard(author,category,id,image,price,title){
  
  let card = `
    <div class='card' data-id=${id} >
      <div class='card-img' > 
        <img src=${image} alt='book'/>
      </div>

      <div class='card-body' >
        <h4 class='card-title' >${title}</h4>
        <p class='card-author' >${author}</p>
        <p class='card-category' >${category}</p>
        <p class='card-price' >${price}</p>
        <a href='#' data-id=${id} class='card-link' >Edit</a>
        <button data-id=${id} onclick='deleteCard(${id})' class='card-button' >Delete</button>
      </div>
    
    </div>
  `

  return card
}






// Add Book

function AddBook(){
  let obj = {}
  obj.author = bookAuthorInput.value
  obj.category = bookCategoryInput.value
  obj.image = bookImageInput.value
  obj.price = bookPriceInput.value
  obj.title = bookTitleInput.value
  console.log(obj)
  fetch(`${bookURL}`,{
    method : "POST",
    body : JSON.stringify(obj),
    headers : {
      "Content-Type" : "application/json"
    }
  }).then((res)=>{
    getData()
  }).catch((err)=>console.log(err))
  
}

bookCreateBtn.addEventListener("click",function(){
  AddBook()
})


// Delete Book

function DeleteBook(id){
  console.log(id)
  // fetch(`${bookURL}/${id}`,{
  //   method : 'DELETE',
  //   headers : {
  //     "Content-Type" : "application/json"
  //   }
  // }).then((res)=>console.log(res)).catch((err)=>console.log(err))
}


filterClassic.addEventListener("click",function(){
  filteredData("Classic")
})

filterFantasy.addEventListener("click",function(){
  filteredData("Fantasy")
})

filterMystery.addEventListener("click",function(){
  filteredData("Mystery")
})



function filteredData(value){
  console.log(value)
  let filterdata;
  filterdata = booksData.filter((el)=>{
    if(el.category == value){
      return true
    }else{
      return false
    }
  })
  DisplayDOM(filterdata)
}


sortAtoZBtn.addEventListener("click",function(){
  let cont = booksData

  function sortAtoZ(){
    cont.sort((a,b)=>{
      if(a.price > b.price)return 1
      if(a.price < b.price) return -1
      return 0
    })
    DisplayDOM(cont)
  }
  sortAtoZ()
})

sortZtoABtn.addEventListener("click",function(){
  let cont = booksData

  function sortAtoZ(){
    cont.sort((a,b)=>{
      if(a.price < b.price)return 1
      if(a.price > b.price) return -1
      return 0
    })
    DisplayDOM(cont)
  }
  sortAtoZ()
})


searchByButton.addEventListener("click",function(){
  SearchFunc()
})


function SearchFunc(){
  // console.log(searchByInput.value,searchBySelect.value)
  let cont = booksData
  if(searchBySelect.value == 'title'){
    cont = cont.filter((el)=>{
      if(el.title == searchByInput.value){
        return true
      }else{
        return false
      }
    })
    DisplayDOM(cont)

  }else if(searchBySelect.value == 'author'){
    cont = cont.filter((el)=>{
      if(el.author == searchByInput.value){
        return true
      }else{
        return false
      }
    })
    DisplayDOM(cont)

  }

}