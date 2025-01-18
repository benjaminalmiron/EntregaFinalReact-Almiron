import { useContext } from "react"
import cartContext from "../storage/cartContext"



function CartView() {
  const {cartItems , removeItem} = useContext(cartContext)
  return (
    <div>
      <h1>Tu carrito</h1>
      
      
      {cartItems.length === 0 ? (
        <p>El carrito está vacío. ¡Agrega algunos productos!</p>
      ) : (
        
        cartItems.map(comp => (
          <div key={comp.id}>
            <h3>{comp.title}</h3>
            <p>Precio: {comp.price}</p>
            <p>Unidades: {comp.count}</p>
            <img src={comp.img} alt={comp.title} />
            <button onClick={() => removeItem(comp.id)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
}

export default CartView;