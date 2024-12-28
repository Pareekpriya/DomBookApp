import { baseUrl } from "./baseUrl.js"

let available = document.getElementById("show")
available.addEventListener("click",async()=>{
try{
    let res = await fetch(`${baseUrl}/books`)
    let data = await res.json()
    let availableBook = data.filter((el,i)=>{
        el.isAvailable==true
        return availableBook
    })
}catch(err){
 console.log("err",err)
}
})