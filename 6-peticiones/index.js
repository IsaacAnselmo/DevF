const request=require('request');
function getOneCivilization(error,response,body){
//    JSON.parse(body);    
    console.log(body);
    console.log(response.statusCode);
    //console.log(response);
}


//curl -X GET "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/1" -H "accept: application/json"
//usando callbacks
request('https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/1',getOneCivilization)