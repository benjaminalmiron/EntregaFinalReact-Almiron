import { useState, useEffect } from "react";
import {asyncDataById} from "../data/asyncData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
  const [compInfo, SetCompInfo]=useState({});
  
  const {id} = useParams()
    useEffect(()=>{

        async function getCompData() {
            const response = await asyncDataById(id)
            SetCompInfo(response)
        }
        getCompData()
    },[id])

       

    console.log(compInfo)
    
    return <ItemDetail {...compInfo}/>
}

export default ItemDetailContainer