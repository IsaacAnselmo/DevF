const request=require('request');
function getAsteroids(error,response,body){
    body=JSON.parse(body); 
    let nearObjects=body.near_earth_objects;

    //console.log(nearObjects) ;
    Object.values(nearObjects)
    .map((nearObjt)=>{
        console

    });

    
}


request('https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-06-23&end_date=2020-06-29&api_key=DEMO_KEY',getAsteroids);