import { Routes, Route, BrowserRouter } from 'react-router-dom' //permite navegacion entre dif componentes segun la URL
import MainPage from "./Componentes/MainPage"
import SingleMovie from './Componentes/SingleMovie'
import './App.css'

//https://www.omdbapi.com/?apikey=c2da535b&s=troya

//https://www.omdbapi.com/?apikey=c2da535b&i=tt11796304

function App() {

  return (//estructura componente APP
  //1-coincide con URL raiz y renderiza a MainPage
  //2-coincide con URL con parametro id y renderiza singlemovie

    //contenedor principal
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/movies/:id' element={<SingleMovie/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App