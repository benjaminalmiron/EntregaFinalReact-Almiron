import Item from "./Item"
import asyncData from "../data/asyncData"
import { useState, useEffect } from "react";
import "./ItemListContainer.css";

// Componente que recibe la prop 'name'
 function ItemListContainer(props){
  const[components, setComponents] = useState([])

  useEffect(()=>{
    const response = asyncData()
    response.then((respuesta) => setComponents(respuesta)).catch((error)=>alert(error))},[])

  
  
  const list = components.map((comp) => (
  <Item
    key={comp.id}
    id={comp.id}
    title={comp.title} 
    price={comp.price}
    img={comp.img}/>));

    <section>
      {list}
    </section>

  return (
    <section className="contenedor-componentes">
      {list}
      </section>
  );
};

// Componente principal donde se pasa el valor de la prop


export default ItemListContainer; 