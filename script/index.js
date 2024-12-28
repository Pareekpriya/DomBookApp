let form = document.getElementById("form")
form.addEventListener("submit",async()=>{
    event.preventDefault()
let email = form.email.value
let password = form.password.value

let adminEmail = "admin@empher.com";
let adminPass = "empher@123";

let userEmail = "user@empher.com";
let userPass =  "user@123";

let userDetail = {userEmail,userPass};
try{
    if(email==adminEmail && password==adminPass){
        alert("Logged in as Admin")
        window.location.href = "admin.html"
        console.log(email,password)
        
    }else if(email==userEmail && password==userPass){
        window.location.href = "books.html"
    }else{
        alert("Somthing went wrong!")
    }

}catch(err){
   console.log("err",err)
}


});

localStorage.setItem("loginData",JSON.stringify(userDetail));
