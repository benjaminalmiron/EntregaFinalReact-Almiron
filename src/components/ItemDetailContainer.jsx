import { useState, useEffect, Component } from "react";
import {asyncDataById} from "../data/asyncData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

function ItemDetailContainer() {
  const [compInfo, SetCompInfo]=useState(null);
  
  const {id} = useParams()
    useEffect(()=>{

        async function getCompData() {
            const response = await asyncDataById(id)
            SetCompInfo(response)
        }
        getCompData()
    },[id])

    if(compInfo)
        return <ItemDetail {...compInfo}/>
    else
    return <Loader/>
    
}

export default ItemDetailContainer