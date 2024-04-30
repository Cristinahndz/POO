import React from "react";

const ImageItem=({title,url})=>{ //muestra img y su titul
    //retorna la aparienc del componente
    return(
        <div>

            <img src={url} alt={title}/>
            <p>{ title }</p>
            
        </div>
    );

}
export default ImageItem;