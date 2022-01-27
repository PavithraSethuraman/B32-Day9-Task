//4.Print the country which uses US Dollars as currency.
const request4=new XMLHttpRequest()
request4.open("GET","https://restcountries.com/v3.1/all",true)
request4.send()

request4.onload=function()
{
    if(request4.status==200)
    {
        let c4=JSON.parse( request4.responseText)
        c4.filter((e)=> e.currencies)
        .filter((e)=> e.currencies.USD)
        .map((e)=>{    
        console.log(e.name.official)
          
         })
    
    }
else{
request4.onerror=function(){
    console.log("error")
}
}}