import { useEffect, useState } from "react";

const useApi=(url)=>{ //se encarga de realizar una solic a la API

  const [data,setData]=useState(null);//almac datos obten
  const [loading,setLoading]=useState(false);//indic si la sol esta en curs

  const fetchApi=()=>{//realiz solic a la url utiliz fetch
    fetch(url)
        .then(respuesta=>respuesta.json())
        .then(respuestaJson=>{
            setLoading(true); //ind solic en curso
            setData(respuestaJson.data)
        })
        .catch(error=> console.log(error))
  }
  useEffect(()=>{ //ejec func fetchapi cuando url cambie
    fetchApi();
  }, [url])
  return {loading,data}//estad de carga
}
export default useApi;