import React, { useState } from 'react';

export const ItemCount = ({
  initial: initialValue,
  stock,
  onAdd,
  titulo,
  prod,
}) => {
  const [count, setCount] = useState(initialValue);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubstract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleConfirm = () => {
    if (count > 0) {
      onAdd(count, prod);
    } else {
      alert('Ingrese una cantidad mayor a 0');
    }
  };

  return (
    <div className='contador-container'>
      <p className='contador-container__titulo'>{titulo}</p>
      <div className='controles'>
        <button className='controles__boton' onClick={handleSubstract}>
          -
        </button>
        <p className='controles__texto'>{count}</p>
        <button className='controles__boton' onClick={handleAdd}>
          +
        </button>
      </div>
      <button className='confirmar-boton' onClick={handleConfirm}>
        Agregar
      </button>
    </div>
  );
};