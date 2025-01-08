
import components from "./data"

function asyncData() {
  
  const promiseData = new Promise ((resolve, reject)=>{
    const error = false;
    setTimeout(()=>{
        if(error)reject("Error Found")
        
        resolve(components)
    }, 2000)
    
  } )

    return promiseData;
}

export function asyncDataById(itemID) {
  console.log("Solicitando componente por ID", itemID)
  const promiseData = new Promise ((resolve, reject)=>{
    
    setTimeout(()=>{
        const requestedComponent = components.find((item)=> item.id === Number(itemID))
        resolve(requestedComponent)
        
    }, 500)
    
  } )

    return promiseData;
}








/* export  function asyncDataById(id) {
  
  const promiseData = new Promise ((resolve, reject)=>{
    const error = false;
    setTimeout(()=>{
        if(error)reject("Error Found")
        const itemRequested = components.find(item => {return item.id === id})
        resolve(itemRequested)
        
    }, 2000)
    
  } )
  return promiseData
}
 */



/* asyncData().then((respuesta)=>{console.log(respuesta) }).catch((error)=>(error)) */

export default asyncData