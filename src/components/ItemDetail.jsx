import ItemCount from "./ItemCount"
import "./ItemDetail.css"



function ItemDetail(props) {
    const { img, price, description , title}= props;
  return (
    <div className="itemDetail">
        
    <img src={img}  alt="" />
    <div className="info-detail">
        <h3></h3>
        <p className="title">{title}</p>
    
        <p>{description}</p>
    
        <p >${price}</p>
    
    <button className="button">Agregar al carrito</button>
        <ItemCount stock={props.stock}/>
    </div>

    </div>
  )
}

export default ItemDetail