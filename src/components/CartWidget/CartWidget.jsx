import { BsCart } from "react-icons/bs"
import './styles.css';

function CartWidget() {
  return (
    <div className="CartWidget">
      <BsCart className="icono" />
      <p className='cardwidget_number'>1</p>

    </div>

  );
}

export default CartWidget;
