import React from "react"; 
import useApi from "../hooks/useApi";//hace solic a la api
import ImageItem from "./ImageItem"; //muestra cada gif

//contruimos la url de la api
const DisplayGifs=({category})=>{ //muestra los gifs con la categ respecti

    const url=`https://api.giphy.com/v1/gifs/search?api_key=VUM89lsYRSZEtzJOAj1IqZDUgHKt7D0G&q=${category}&limit=5
    `;
    const {loading,data}=useApi(url);

    //retorna la apariencia del componente
    return(
        <div className="container-gifs"> 
        
             {
                loading ?//verif si es true
                    data.map(img=>(//se mapea los datos y se renderiza
                    <ImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url}/>
                ))
                : ''
             }
            
             

        </div>

    );
}
export default DisplayGifs;