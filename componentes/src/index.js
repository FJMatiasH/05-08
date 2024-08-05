import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';

const App = () => {
  return (
  <h1>{PaymentResponse.contadorInicial} </h1>
  )
}

let contador = 0

const refresh = ()=> {

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App contadorInicial={contador} />
  </React.StrictMode>
);

}

setInterval(() => {
contador ++
refresh()
}, 1000)

contador = contador + 1

