import React from 'react';

const Card=({src})=>{
    return(
        <div className="card" style={{width: "10rem"}}>
          <img className="card-img-top" src={src} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Titulo</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

    );

}

export default Card;