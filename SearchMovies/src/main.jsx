import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataProvider } from './context/DataContext.jsx' //componente proporciona datos a traves de un contexto en la app

//React.StrictMode: componente que ayuda en la deteccion de posibles problemas
//App se renderiza dentro de dataProvider
ReactDOM.createRoot(document.getElementById('root')).render( //renderiza en el elmento HTML 
  <React.StrictMode> 
    <DataProvider>
      <App />
    </DataProvider>

  </React.StrictMode>,
)
