import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ItemMovie from "./ItemMovie";

const Movies = () => {//componente
    const { isLoading, data } = useContext(DataContext);//proporciona datos de la peli y su estado de carga

    return ( //contenedor de las pelis
        <div className="movies-content">
            {
                !isLoading ?//si es falso mostramos las peliclas
                    data.map(item => (//mapeando sobre data
                        <ItemMovie //renderizamos ItemMovie
                        key={item.imdbID} 
                        id={item.imdbID} 
                        type={item.Type} 
                        title={item.Title} 
                        poster={item.Poster} 
                        year={item.Year}
                        />
                    ))
                : ''//cadena vacia
            }
        </div>
    );
}
 
export default Movies;
