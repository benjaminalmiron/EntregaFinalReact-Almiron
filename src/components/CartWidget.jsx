import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import cartContext from "../storage/cartContext"

function CartWidget() {
  const context = useContext(cartContext)
  console.log(context)


  return (
    <div className="cart">
      <a><FontAwesomeIcon className="cart-icon" icon={faCartShopping}/></a>
    <span className="cart-count">{context.countItemsInCart()}</span>
    </div>
  )
}

export default CartWidget