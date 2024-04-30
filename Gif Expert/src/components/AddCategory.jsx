import React, { useState } from "react";

const AddCategory=({setCategory})=>{ //usuario agg new categ
    const [value,setValue]=useState("");//almac el valor del input
    const [error,setError]=useState(false);//por si muestra msj error

    const searchGif=e=>{//activ cuando se envia el form
        e.preventDefault();
        if(value===""){//si valor del input
            setError(true);//estado error
            return;
        }
        setError(false);
        setCategory(value);
        setValue("");//limpia el value

    }

    return (
        <>
        
        
            <form onSubmit={searchGif}>
                <input type="text" placeholder="Search..."//perm  ingresar categ de busqueda
                    onChange={e=>setValue(e.target.value)}
                    value={value}
                />
            </form>
            {error ? <p className="error">El campo no puede estar vacio</p>:""}

           

        </>
    );
}

export default AddCategory;