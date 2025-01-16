import ItemCount from "./ItemCount"
import "./ItemDetail.css"
import { useContext } from "react"
import cartContext from "../storage/cartContext"




function ItemDetail(props) {
    const { img, price, description , id, title, stock}= props;
    const {addItem} = useContext(cartContext)

    function submitCount(count){
      console.log(`Agregaste ${count} unidades al carrito `)
      addItem({id, price, title, count, img})
    }


  return (
    <div className="itemDetail">
        
    <img src={img}  alt="" />
    <div className="info-detail">
        <h3></h3>
        <p className="title">{title}</p>
    
        <p>{description}</p>
    
        <p >${price}</p>
    
    
        <ItemCount submitCount={submitCount} max={stock}/>
    </div>

    </div>
  )
}

export default ItemDetail