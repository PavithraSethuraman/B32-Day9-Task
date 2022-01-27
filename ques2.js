//b.Get all the countries with a population of less than 2 lakhs using Filter function
const request1=new XMLHttpRequest()
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send()

request1.onload=function()
{
    if(request1.status==200)
    {
        let c1=JSON.parse( request1.responseText)
        let Population = c1.filter((coun)=>(coun.population<200000));
    console.log(Population);
    }
else{
request1.onerror=function(){
    console.log("error")
}
}}
