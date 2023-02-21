import { BsBagDash } from "react-icons/bs";
import './styles.scss';

function CartWidget() {
    return (
      <a href="#" className="cart-widget">
        <BsBagDash/>
        <span>0</span>
      </a>
    );
  }
  
  export default CartWidget;