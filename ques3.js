//c.Print the following details name, capital, flag using forEach function
const request2=new XMLHttpRequest()
request2.open("GET","https://restcountries.com/v3.1/all",true)
request2.send()

request2.onload=function()
{
    if(request2.status==200)
    {
        let c2=JSON.parse( request2.responseText)
        c2.forEach((count)=>
             console.log(count.name,count.capital,count.flags.png))
    }
else{
request2.onerror=function(){
    console.log("error")
}
}}
