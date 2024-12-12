

function CartProducts(props) {
    const {price, title , img} = props;
  return (
    <div>
        <img src={img}  alt="" />
    <div>
        <h3></h3>
        <p>{title}</p>
    </div>

    <div>
        <p>{price}</p>
    </div>

    <button className="button">Agregar al carrito</button>
    </div>
  )
}

export default CartProducts