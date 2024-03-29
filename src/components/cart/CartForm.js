import React, { useContext, useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { context } from '../../context/CartContext';
import { isFormValid } from '../../helpers/helpersFunctions';

export const CartForm = ({ setOrderInfo, sumOfShopItems }) => {
  const { shopCartItems, purchaseOrder } = useContext(context);

  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const shopOrderToUser = shopCartItems.map((prod) => {
      return {
        item: prod.selectedItem.titulo,
        descripcion: prod.selectedItem.descripcion,
        cantidad: prod.selectedQuantity,
        id: prod.selectedItem.id,
        photo: prod.selectedItem.pictureUrl,
        estado: 'Realizada',
      };
    });

    const newOrder = {
      buyer: {
        name: values.name,
        phone: values.phone,
        email: values.email,
      },
      shopOrderToUser,
      total: sumOfShopItems,
      date: serverTimestamp(),
    };

    const collectionOrder = collection(db, 'orders');
    if (isFormValid(values.name, values.phone, values.email)) {
      addDoc(collectionOrder, newOrder).then((resp) => {
        const orderId = resp.id;
        setOrderInfo(orderId);
        purchaseOrder(orderId);
      });
    }
  };

  return (
    <div className='cart-form'>
      <h2 className='cart-form__titulo'>Registro de datos obligatorio para finalizar la compra</h2>
      <form onSubmit={handleSubmit} className='cart-form-card'>
        <label htmlFor='name'>Nombre: </label>
        <input
          id='name'
          name='name'
          value={values.name}
          onChange={handleChange}
        />
        <label htmlFor='phone'>Telefono: </label>
        <input
          id='phone'
          name='phone'
          value={values.phone}
          onChange={handleChange}
        />
        <label htmlFor='email'>Email: </label>
        <input
          id='email'
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange}
        />
        <button
          className='cart-form-card__enviar'
          type='submit'
          onSubmit={handleSubmit}
        >
          Enviar datos
        </button>
      </form>
    </div>
  );
};