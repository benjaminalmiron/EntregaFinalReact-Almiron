import CartWidget from './CartWidget'
import "./NavBar.css";


const NavBar = () => {
  return (
    <header className="header">
      <a className='logo' href="">Gaming House</a>

      <nav className="navBar">
      <a href="#">Inicio</a>
      <a href="#">Teclados</a>
      <a href="#">Mouses</a>
      <a href="#">Monitores</a>
      <a href="#">Contacto</a>
      <CartWidget/>
      </nav>
      
    </header>
    
  )
}

export default NavBar

//rfce


