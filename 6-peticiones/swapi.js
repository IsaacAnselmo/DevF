const request=require('request');
function getResidents(error,response,body)
{
    residents=JSON.parse(body).residents;

    const residentsInfo=()=>{
        
    }




}

request('https://swapi.dev/api/planets/1/',getResidents);