//d.Print the total population of countries using reduce function
const request3=new XMLHttpRequest()
request3.open("GET","https://restcountries.com/v3.1/all",true)
request3.send()

request3.onload=function()
{
    if(request3.status==200)
    {
        let c3=JSON.parse( request3.responseText)
         let totalPopulation = c3.reduce((tot,country)=>tot+country.population,0);
         console.log(totalPopulation);
    }
else{
request3.onerror=function(){
    console.log("error")
}
}}