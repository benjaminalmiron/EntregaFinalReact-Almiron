import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import CartProducts from "./components/CartProducts"
import Footer from "./components/Footer"



const App = ()=> {
  return(
    
  <>
  <header>
  <NavBar/>
  </header>
    
    <main>
    <section>
     <ItemListContainer/> 
     </section>

    <section className="contenedor-componentes">
      <CartProducts price={100000} title="Teclado" img="public/X3-205.jpg"/>
      <CartProducts price={100000} title="Teclado" img="public/X3-205.jpg"/>
      <CartProducts price={100000} title="Teclado" img="public/X3-205.jpg"/>
    </section>

    </main>
     
     <footer>
      <Footer/>
     </footer>
     
     </>
 
    

)  
}

export default App
