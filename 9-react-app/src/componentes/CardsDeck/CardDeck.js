import React, { useState, useEffect } from 'react';
import Card from './../Card/Card';
import axios from 'axios'; //por que al instalar se configuro en el package.js

const CardDeck=()=>{

    const API_KEY='7PJUikfqGtGIh5f9fmvk5R5KXQaE26Bk';
    const [data,setData]=useState([]); 
    const [palabra,setPalabra]=useState('');//uena practica inicializar el estado con el objeto más simple del tipo
    const pintarCartas = () => {
        return data.length>0
        ? data.map((item) => <Card key={item.id} src={item.images.downsized_large.url}></Card>)
        : <h1>No hay información</h1>;
    }
    useEffect(()=>{
        getGifts();
    }, [palabra]);

    const getGifts = () => {
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${palabra}&limit=10&lang=es`)
        .then(({data, status}) => {
            
            setData(data.data);
        });
    };
    return (
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Ingresa el gif que deseas buscar" aria-label="Recipient's username" aria-describedby="basic-addon2" 
                onChange={(event)=>{
                        setPalabra(event.target.value);
                        
                    }}/>
                
                {/*<div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                </div>*/}
            </div>
            {palabra}
            <div className="card-deck">
                {pintarCartas()}
            </div>
           
        </>
    );
}

export default CardDeck;