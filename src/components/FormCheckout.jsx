import { useState } from "react"

function form (){
    
    const[userData, setUserData]=useState({
        username: "",
        age:""
    })


    function onInputChange(evt){
        const inputName = evt.target.name
        const newUserData = {...userData}
        newUserData[inputName]= evt.target.value
        setUserData(newUserData)
    }

    return(
        <div>
            <h2>Llena los campos para completar tu compra</h2>
            <div>
                <label htmlFor="">Nombre</label>
                <input name="username"  type="text" onChange={onInputChange}/>
            </div>
            <div>
                <label htmlFor="">Edad</label>
                <input name="age" type="text" onChange={onInputChange}/>
            </div>

            <button disabled={!(userData.username !== "" && userData.age !== "")} onClick={(evt)=> onsubmit(evt)}></button>
        </div>
    )

}

export default form

