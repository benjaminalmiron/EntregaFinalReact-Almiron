import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'
import "./NavBar.css";


const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar">
      <div>
      <NavLink className='logo' to="/">Gaming House</NavLink>
      </div>
      <ul className='navbar-nav'>
        <li>
          <NavLink  to="/">Inicio</NavLink>
        </li>
        <li>
        <NavLink to="/item">Detalle</NavLink>
        </li>
        <li>
        <a href="#">Mouses</a>
        </li>
        <li>
        <a href="#">Monitores</a>
        </li>
        <li>
        <a href="#">Procesadores</a>
        </li>
        <li>
        <a href="#">Contacto</a>
        </li>
      </ul>
      <CartWidget/>
      </nav>
      
    </header>
    
  )
}

export default NavBar

//rfce


