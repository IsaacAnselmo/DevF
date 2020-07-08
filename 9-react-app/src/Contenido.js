import React from 'react';

function Contenido({children}){
    return(
        <div className="Contenido">
            <p>
            {children}
            </p>
        </div>
    );
}

export default Contenido;
