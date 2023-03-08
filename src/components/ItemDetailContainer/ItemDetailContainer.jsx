import React from 'react';
import './styles.css';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import listadoProductos from "../../Mock";

export default function ItemDetailContainer() {

const [item, setItem] = useState([])

const params = useParams()
const idProduct = params.idProducto

useEffect (()=>{
    const promesaItem = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let encontrado = listadoProductos.find((item) => item.id === parseInt(idProduct)); resolve(encontrado);
        }, 1000)
    });

    promesaItem.then((respuesta)=>setItem(respuesta));


}, [])

  return (
    <div className="container">
        <ItemDetail item={item}/>
    </div>
  )
}


