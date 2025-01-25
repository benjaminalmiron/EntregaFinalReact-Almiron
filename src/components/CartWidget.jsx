import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import cartContext from "../storage/cartContext"
import { Link } from 'react-router-dom';

function CartWidget() {
  const context = useContext(cartContext)
  console.log(context)


  return (
    <div>
      <Link to="/cart" className="cart">
      <FontAwesomeIcon className="cart-icon" icon={faCartShopping}/>
    {
      context.countItemsInCart( )>0 &&
      <span className="cart-count">{context.countItemsInCart()}</span>
    }
    </Link>
    </div>
  )
}

export default CartWidget