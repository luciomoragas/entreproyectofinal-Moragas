import React from 'react';
import "./styles.css";

export default function ItemDetail({item}) {

  return (
        <div className="card">
            <div>
               <h4>{item.nombre}</h4>
            </div>
            <div>
                <img className="itemdetail_img" src={item.img} alt="imagencurso" />
            </div>
            <div>
                <h5>Profesor: {item.profesor}</h5>
            </div>
            <div>
                <h5>Carga horaria: {item.cargahoraria}</h5>
            </div>
            <div>
                <h5>${item.precio}</h5>
            </div>

        </div>
  )
}
