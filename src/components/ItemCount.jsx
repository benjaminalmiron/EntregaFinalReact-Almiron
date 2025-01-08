
import { useState } from 'react'

function ItemCount(props) {
    let [count, setCount]= useState(1)
    
    
    const handleAdd = () => {
        setCount(count <props.stock ? count + 1 : count) 
    }
    const handleSubstract = () => {
        if(count >1){
            setCount(count -1)
        }
    }
  return (
    <>
    <div>
        <button onClick={handleAdd}>+</button>
        <span>{count}</span>
        <button onClick={handleSubstract}>-</button>
    </div>
    </>
  )
}

export default ItemCount