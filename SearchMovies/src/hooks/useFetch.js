import { useEffect, useState } from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=c2da535b`;//url base de la API

export const useFetch = (params) => {//hook personalizado para peticiones a la API
    const [isLoading, setIsLoading] = useState(true);//controla estado de carga de la peticion
    const [error, setError] = useState(false);//controlar errores
    const [data, setData] = useState(null);//almacena datos

    const fetchMovie = (url) => { //funcion que realiza solicitud a la URL
        setIsLoading(true);
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => {
                if (respuestaJson.Response === "True") {//dependiendo respuesta de la API se actualizan 
                    //console.log("res: ", respuestaJson);
                    setData(respuestaJson.Search || respuestaJson);
                    setError(false);
                } else {
                    setError(true);
                }
                setIsLoading(false);
            }).catch(error => {console.log(error);})
    }
    useEffect(() => {
        fetchMovie(`${API_ENDPOINT}${params}`);
    }, [params])

    return {isLoading, error, data}
}