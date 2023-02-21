import CartWidget from '../CardWidget';
import './styles.scss';

function NavBar() {
    return (
      <div className="header">
        <div className="logo">
          <div className="title">
            <a href="/">
              GIN&TO
            </a>
          </div>
  
          <ul className="secciones">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Gines</a></li>
            <li><a href="#">Sponsors</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div className="cardw">
          <CartWidget />
        </div>
      </div>
    );
  }
  
  export default NavBar;