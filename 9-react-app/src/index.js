import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contenido from './Contenido';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardImgPrim from './componentes/CardImgPrim/CardImgPrim';
import CardDeck from './componentes/CardsDeck/CardDeck';
import NavBar from './componentes/NavBar/NavBar';
import CardManager from './componentes/CardManager/CardManager';



ReactDOM.render(
  <React.StrictMode>
    <NavBar></NavBar>
    <App>
      <CardImgPrim></CardImgPrim>
    </App>
    <CardManager></CardManager>

  </React.StrictMode>,
  document.getElementById('root')
);


