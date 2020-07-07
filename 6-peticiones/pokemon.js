
function getPokemon(error,response,body){
    body=JSON.parse(body);    
    const pokemon=[];
    const nombre='Nombre de Pokemon: '+body.name;
    const nopok='id '+body.order;
    //cons tipo='Tipo: '+body.types.type;
    const peso ='Peso '+body.weight;
    const alt="Altura "+body.height;
    //const move='Los moves son: '+ body.moves;
    const pokemonn2=pokemon.push(nopok,nombre,peso,alt);
    console.log(`Pokedex: ${pokemon}`);
    
    
}

for(var n=1;n<152;n++){
    const request=require('request');
    request(`https://pokeapi.co/api/v2/pokemon/${n}`,getPokemon)
    console.log(n);
}
