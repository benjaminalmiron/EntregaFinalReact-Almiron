import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

function CartWidget() {
  return (
    <>
    
    <a className="" href><FontAwesomeIcon icon={faCartShopping}/></a>

    <span className="contador-productos">0</span>
    
    
    </>
  )
}

export default CartWidget