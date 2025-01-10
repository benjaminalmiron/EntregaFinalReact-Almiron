import Item from "./Item"
import asyncData, { asyncDataByCategory } from "../data/asyncData"
import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

// Componente que recibe la prop 'name'
 function ItemListContainer(){
  const[components, setComponents] = useState([])
  const {catid}=useParams()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = catid === undefined 
          ? await asyncData() 
          : await asyncDataByCategory(catid);
        setComponents(response);
      } catch (error) {
        alert(error);
      }
    };
  
    fetchData();
  
  }, [catid]);


 /*  useEffect(()=>{
    if(catid === undefined){

      const response = asyncData()
    response.then((respuesta) => setComponents(respuesta)).catch((error)=>alert(error))
      
    }else{
      const response = asyncDataByCategory(catid)
      response.then((respuesta) => setComponents(respuesta)).catch((error)=>alert(error))

    }
    },[catid]) */

  
  
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