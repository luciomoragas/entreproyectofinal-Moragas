import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Item = ({curso}) => {
    return(
        
        <div className="card">
            <div>
               <h4>{curso.nombre}</h4>
            </div>
            <div>
                <img className="item_img" src={curso.img} alt="imagencurso"/>
            </div>
            <Link to={`/items/${curso.id}`}>                
                <button className="btn">DETALLES</button>
            </Link>
        </div>
        

    );
};


export default Item;

