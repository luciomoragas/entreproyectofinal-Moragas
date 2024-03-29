import { useEffect, useState } from 'react';
import { createContext } from 'react';

export const context = createContext();

const Provider = context.Provider;

export const CartContext = ({ children }) => {
  const items = JSON.parse(localStorage.getItem('products'));

  const [shopCartItems, setShopCartItems] = useState(items || []);

  const cartLength = shopCartItems.reduce(
    (accum, item) => accum + item.selectedQuantity,
    0
  );

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(shopCartItems));
  }, [shopCartItems]);

  const addItem = (item, quantity, checked) => {
    setShopCartItems([
      ...shopCartItems,
      {
        selectedItem: item,
        selectedQuantity: quantity,
      },
    ]);
    if (checked === false) {
      alert('Curso agregado correctamente');
    } else {
      alert('XXX Tenemos un error!');
    }
  };

  const removeItem = (itemId) => {
    const arrayWithoutItemSelected = shopCartItems.filter(
      (item) => item.selectedItem.id !== itemId
    );
    setShopCartItems(arrayWithoutItemSelected);
    alert('Curso eliminado exitosamente del carrito');
  };

  const clearItems = () => {
    setShopCartItems([]);
    alert('Cursos eliminados- El carrito esta vacio');
  };

  const isInCart = (id) => {
    const isItemInCart = shopCartItems.find(
      (item) => id === item.selectedItem.id
    );

    if (isItemInCart !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  const purchaseOrder = (id) => {
    setShopCartItems([]);
    alert(`Orden aceptada - Su id de compra es: ${id}`);
  };

  const numberFormat = new Intl.NumberFormat('es-AR');

  const sumOfShopItems = numberFormat.format(
    shopCartItems.reduce(
      (accum, item) => accum + item.selectedItem.precio * item.selectedQuantity,
      0
    )
  );

  const contextValue = {
    addItem: addItem,
    removeItem: removeItem,
    clearItems: clearItems,
    isInCart: isInCart,
    shopCartItems: shopCartItems,
    cartLength: cartLength,
    purchaseOrder: purchaseOrder,
    sumOfShopItems: sumOfShopItems,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};