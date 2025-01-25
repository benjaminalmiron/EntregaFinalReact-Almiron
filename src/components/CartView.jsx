import { useContext } from "react"
import cartContext from "../storage/cartContext"
import { createBuyOrder } from "../data/database"




function CartView() {
  const {cartItems , removeItem, getTotalPrice} = useContext(cartContext)


 async function HandleCheckout() {
    const orderData ={
        buyer: {
            name: "juan",
            email: "xxxxx@gmail.com"
        },
        items: {cartItems},
        total: getTotalPrice(),
        date: new Date()
    }
    const data = await createBuyOrder(orderData)
    console.log(data)
  }
  
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
  <button onClick={HandleCheckout}>Finalizar Compra</button>
    </div>
  );
}

export default CartView;