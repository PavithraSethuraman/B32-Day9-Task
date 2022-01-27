//Solving problems using array functions on rest countries data.
//a.Get all the countries from Asia continent /region using Filter function
const request=new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()

request.onload=function()
{
    if(request.status==200)
    {
        let c=JSON.parse( request.responseText)
        let Asian = c.filter((con)=>(con.region ==="Asia"));
        console.log(Asian);
    }
else{
request.onerror=function(){
    console.log("error")
}
}}