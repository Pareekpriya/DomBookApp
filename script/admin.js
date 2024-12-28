import {baseUrl} from "./baseUrl.js"

// let getData = JSON.parse(localStorage.getItem("loginData",userDetail));

let form = document.getElementById("form")
form.addEventListener("submit", async()=>{
    event.preventDefault()
    let title = form.title.value
    let author = form.author.value
    let category = form.category.value
    let bookObj = {
        title, 
        author,
        category
        
    }

    try{
        let res = await fetch(`${baseUrl}/books`,{
           method:"POST",
           Header:{
                "content-type":"application/json"
            },
           body:JSON.stringify(bookObj)
        })
        let data = await res.json()

        alert("Book Added Successfully")
        
    }catch(err){
      console.log("err",err)
    }
})

async function getBook(){
   try{
    let res = await fetch(`${baseUrl}/books`)
    let data = await res.json()
    return displayBook(data)
   }catch(err){
      console.log("err",err)
   }

}


function displayBook(arr){
  let container = document.getElementById("cont")

  arr.map((el,i)=>{
    let card = document.createElement("card")
  
    let title = document.createElement("h4")
    title.textContent = el.title

    let author = document.createElement("h4")
    author.textContent = el.author

    let category = document.createElement("h4")
    category.textContent = el.category
    
    let availability = document.createElement("h4")
    availability.textContent = "isAvailable:false"

    let verifyBook = document.createElement("button")
    verifyBook.textContent = "Verify"
    verifyBook.addEventListener("click",()=>{
        confirm("Are you sure to verify?")
        verifun(el)
    })

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click",()=>{
        confirm("Are you sure to delete?")
        deleteBook(e)
    })

  })
  card.append(title,author,category,availability,verifyBook,deleteBtn)
  container.append(card)
  
} 

async function verifun(el){
    let newObj = {...el,isAvailable:true}
    verifyBook.disabled = true
     try{
     await fetch(`${baseUrl}/books/${el.id}`,{
       method:"PATCH",
       Header:{
        "content-type":"application/json"
       },
       body:JSON.stringify(newObj)
     })
     }catch(err){
      console.log("err",err)
     }
}

async function deleteBook(e){
  try{
    let res = await fetch(`${baseUrl}/book/${el.id}`,{
        method:"DELETE"
    })
  }catch(err){
    console.log("err",err)
  }
}