import ItemCount from "./ItemCount"

function ItemDetail(props) {
    const { img, price, stock, title}= props;
  return (
    <div>
        <div>
    <img src={img}  alt="" />
    <div>
        <h3></h3>
        <p className="texto">{title}</p>
    </div>

    <div>
        <p >${price}</p>
    </div>

    <button className="button">Agregar al carrito</button>
    </div>
        <ItemCount stock={props.stock}/>
    </div>
  )
}

export default ItemDetail