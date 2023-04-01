import React from 'react';

export const Item = ({ titulo, descripcion, precio, pictureUrl }) => {
  return (
    <div className='card-container'>
      <h3 className='card-container__titulo'>{titulo}</h3>

      <img className='card-container__picture' src={pictureUrl} alt={titulo} />
      <p className='card-container__descripcion'>{descripcion}</p>
      <p className='card-container__precio'>${precio}</p>
    </div>
  );
};
