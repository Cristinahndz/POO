import { useContext } from "react";
import { useState } from "react";
import { DataContext } from "../context/DataContext";

const FormSearch = () => {
    const [title, setTitle] = useState("")//almacena el titulo de la peli introducido 
    const {setQuery, error} = useContext(DataContext);//accede al contexto para actualizar busqueda y estado error

    const handleSubmit = (e) => {//se ejecuta cuando el form se envie
        e.preventDefault();
        //console.log('title: ', title);
        setQuery(title); 
    }

    return ( //reperesenta el formulario de busqueda
        <div className="form-search">
            <h2>Buscador de peliculas antiguas</h2>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Title movie" onChange={e=>setTitle(e.target.value)}/>
                <input type="submit" value="Search" />
            </form>
            { error && <p className="error">La pelicula no existe </p> }
        </div>
    );
}
 
export default FormSearch;
