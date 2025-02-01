import { useContext, useState } from "react"
import cartContext from "../storage/cartContext"
import { createBuyOrder } from "../data/database"

function CartView() { 
  const [userData, setUserData] = useState({
    username: "",
    age: ""
  })

  const [orderConfirmation, setOrderConfirmation] = useState(null)  // Estado para guardar la respuesta de la compra

  function onInputChange(evt) {
    const inputName = evt.target.name
    const newUserData = { ...userData }
    newUserData[inputName] = evt.target.value
    setUserData(newUserData)
  }

  const { cartItems, removeItem, getTotalPrice, clearCart } = useContext(cartContext)

  async function HandleCheckout(evt) {
    evt.preventDefault()

    const orderData = {
      buyer: {
        name: userData.username,
        email: "xxxxx@gmail.com",  // Aquí podrías obtener el email de algún lugar si lo necesitas
        age: userData.age
      },
      items: cartItems,
      total: getTotalPrice(),
      date: new Date()
    }

    try {
      const data = await createBuyOrder(orderData)  // El ID de la compra es el valor que devuelve createBuyOrder
      console.log("ID de la compra:", data)  // Este es el ID del documento creado en Firestore
  
      // Utilizamos el ID devuelto por Firestore
      setOrderConfirmation({
        success: true,
        orderId: data,  // El valor de 'data' es el ID del pedido
      })
  
      // Vaciar el carrito después de la compra
      clearCart()
    } catch (error) {
      console.error("Error al realizar la compra:", error)
      setOrderConfirmation({
        success: false,
        message: "Hubo un problema al procesar tu compra."
      })
    }
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

      {/* Solo muestra el formulario si el carrito tiene productos */}
      {cartItems.length > 0 && (
        <form>
          <h2>Llena los campos para completar tu compra</h2>
          <div>
            <label>Nombre</label>
            <input name="username" type="text" onChange={onInputChange} />
          </div>
          <div>
            <label>Edad</label>
            <input name="age" type="text" onChange={onInputChange} />
          </div>

          <button
            disabled={!(userData.username !== "" && userData.age !== "")}
            onClick={HandleCheckout}
          >
            Realizar compra
          </button>
        </form>
      )}

      {/* Mostrar la confirmación de la compra o error */}
      {orderConfirmation && (
        <div>
          {orderConfirmation.success ? (
            <div>
              <h3>Compra realizada con éxito</h3>
              <p>¡Gracias por tu compra, {userData.username}!</p>
              <p>Tu ID de compra es: {orderConfirmation.orderId}</p>
            </div>
          ) : (
            <p>{orderConfirmation.message}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default CartView