import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'



const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar">
      <div>
      <NavLink className='logo' to="/">Gaming House</NavLink>
      </div>
      <ul className='navbar-nav'>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
        <NavLink to="/item"></NavLink>
        </li>
        <li>
        <NavLink to= "/category/Teclados">Teclados</NavLink>
        </li>
        <li>
        <NavLink to= "/category/Mouses">Mouses</NavLink>
        </li>
        <li>
        <NavLink to= "/category/Monitores">Monitores</NavLink>
        </li>
        <li>
        <NavLink to= "/category/Procesadores">Procesadores</NavLink>
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


