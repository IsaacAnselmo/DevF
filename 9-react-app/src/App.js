import React from 'react';
import logo from './logo.svg';
import './App.css';


function App({id,children}) {
  return (
    <div className="App">
      <header className="App-header">
        {children}
        <p>
          
        </p>

      </header>
    </div>
  );
}

export default App;
