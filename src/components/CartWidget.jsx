import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"


function CartWidget() {
  return (
    <div className="cart">
      <a><FontAwesomeIcon className="cart-icon" icon={faCartShopping}/></a>
    <span className="cart-count">0</span>
    </div>
  )
}

export default CartWidget