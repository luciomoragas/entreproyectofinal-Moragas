import './styles.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
    <div className="container">
      <span className="navbar-brand">
      <Link to={"/"}>
        <img src="/img/logoglobal.png"alt="Logo Global Cursos Co" className='navbar_img' />
      </Link>  
      </span>
      <li><Link to='/category/cursos-idiomas' className='navbar_menu'>CURSOS DE IDIOMAS</Link></li>
      <li><Link to='/category/cursos-cocina' className='navbar_menu'>CURSOS DE COCINA</Link></li>
      <CartWidget className="cartWidget"/>
              
    </div>
    
  </nav>

  );
}

export default NavBar;
