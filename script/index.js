let form = document.getElementById("form")
form.addEventListener("submit",async()=>{
    event.preventDefault()
let email = form.email.value
let password = form.password.value
try{
    if(email=="admin@empher.com" && password=="empher@123"){
        alert("Logged in as Admin")
        window.location.href = "admin.html"
        console.log(email,password)
    
    
    }else if(email=="user@empher.com" && password=="user@123"){
        window.location.href = "books.html"
    }else{
        alert("Somthing went wrong!")
    }

}catch(err){
   console.log("err",err)
}



})
