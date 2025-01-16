
import { useState } from 'react'

function ItemCount(props) {
    let [count, setCount]= useState(1)
    
    
    const handleAdd = () => {
        setCount(count <props.max ? count + 1 : count) 
    }
    const handleSubstract = () => {
        if(count >1){
            setCount(count -1)
        }
    }

    function handleClick() {
        props.submitCount(count);
      }

  return (
    <>
    <div className='Button1'>
        <button className='addButton' onClick={handleAdd}>+</button>
        <span>{count}</span>
        <button className='addButton' onClick={handleSubstract}>-</button>
    </div>
    <div>
    <button onClick={handleClick} className="button">Agregar al carrito</button>
    </div>
    </>
  )
}

export default ItemCount