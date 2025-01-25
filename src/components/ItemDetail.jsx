import ItemCount from "./ItemCount"
import "./ItemDetail.css"
import { useContext, useState } from "react"
import cartContext from "../storage/cartContext"
import { Link } from "react-router-dom";



function ItemDetail(props) {
    const [isAddedToCart, setIsAdded]= useState(false)
    const { img, price, description , title, stock, id}= props;
    const {addItem} = useContext(cartContext)

    function submitCount(count){
      console.log(`Agregaste ${count} unidades al carrito `)
      addItem({id, price, title, count, img})
      setIsAdded(true)
    }


  return (
    <div className="itemDetail">
        
    <img src={img}  alt="" />
    <div className="info-detail">
        <h3></h3>
        <p className="title">{title}</p>
    
        <p>{description}</p>
    
        <p >${price}</p>
    
        {
          isAddedToCart ? <Link to={`/cart/`}> <button>Ver Carrito</button> </Link> : <ItemCount submitCount={submitCount} max={stock}/>
          
        }
    </div>

    </div>
  )
}

export default ItemDetail