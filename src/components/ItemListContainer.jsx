import Item from "./Item"
import asyncData, { asyncDataByCategory } from "../data/asyncData"
import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { SpinnerCircularFixed } from 'spinners-react';
import Loader from "./Loader"

// Componente que recibe la prop 'name'
 function ItemListContainer(){
  const[components, setComponents] = useState([])
  const {catid}=useParams()
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Empieza el loader
        const response = catid === undefined
          ? await asyncData()
          : await asyncDataByCategory(catid);
        setComponents(response);
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false); // Termina el loader
      }
    };
  
    fetchData();
  
  }, [catid]);

  
  const list = components.map((comp) => (
  <Item
    key={comp.id}
    id={comp.id}
    title={comp.title} 
    price={comp.price}
    img={comp.img}/>));

    if (isLoading) {
      return <Loader />;
    }
  
    return (
      <section className="contenedor-componentes">
        {list}
      </section>
    );
};

// Componente principal donde se pasa el valor de la prop


export default ItemListContainer; 