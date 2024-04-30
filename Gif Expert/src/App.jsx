import { useState } from 'react'

import './App.css'
import AddCategory from './components/AddCategory'
import DisplayGifs from './components/DisplayGifs';

function App() {
  const [category, setCategory] = useState(""); //almacena la categ de los gifs

  return (//dev estructura jsx
    <div className="App">
      <h2>GIFS APP</h2>
      <AddCategory setCategory={setCategory}/> 
      <DisplayGifs category={category}/>
    </div>
  )
}

export default App //para poder ser usado por otros modulos
