import {baseUrl} from "./baseUrl.js"

let getData = JSON.parse(localStorage.getItem("loginData",userDetail));

let form = document.getElementById("form")
form.addEventListener("submit", async()=>{
    event.preventDefault()
    let title = form.title.value
    let author = form.author.value
    let category = form.category.value
    let bookObj = {
        title, author,category
    }

    try{
        let res = await(`${baseUrl}/books`,{
           method:"POST",
           Header:{

            "content-type":"application/json"
            },
           body:JSON.stringify(bookObj)
        })
        let data = await res.json()
        alert("Book Added Successfully.")
    }catch(err){
      console.log("err",err)
    }
})