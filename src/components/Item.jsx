import { Link } from "react-router-dom";
import Button from "./Button";
import "./NavBar.css"

function Item(props) {
    const {price, title , img , id , } = props;
  return (
    <div className="card">
    <img  src={img}  alt="" />
    <div>
        <h3></h3>
        <p className="texto">{title}</p>
    </div>
    
    <div>
        <p >${price}</p>
    </div>
     
    <Link to={`/item/${id}`}>
    <Button className="button">Ver Detalle</Button>
    </Link>
    </div>
  )   
}

export default Item

