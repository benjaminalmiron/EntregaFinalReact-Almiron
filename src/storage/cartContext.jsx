import { createContext, useState } from "react";

 const cartContext = createContext("carrito")

export function CartContextProvider(props){
    const [cartItems, setCartItems] = useState([])

    function getTotalPrice(){
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.count * item.price
        });
    return totalPrice
    }

    function countItemsInCart(){
        let total = 0;
        cartItems.forEach(item => {
            total += item.count
        });
    return total
    }

    function removeItem(id){
        const cartState = cartItems.filter(item => item.id !== id)
        setCartItems(cartState)
    }

    function clearCart() {
        const cartState = []; 
        setCartItems(cartState); 
    }
 
    function addItem({id, price, title, count, img}){
        /* const copyCartItems = [...cartItems, {id:id, price:price, title:title, count:count, img:img}]
        copyCartItems.push({id:id, price:price, title:title, count:count, img:img}) */
        /* setCartItems( [...cartItems, {id:id, price:price, title:title, count:count, img:img}]) */
        
        const existingItem = cartItems.find(item => item.id === id);

        if (existingItem) {
            
            const updatedCart = cartItems.map(item => {
                if (item.id === id) {
                    return { ...item, count: item.count + count };
                } else {
                    return item;
                }
            });
            setCartItems(updatedCart);
        } else {
            
            setCartItems([...cartItems, { id, price, title, count, img }]);
        }

    }    

    
    return <cartContext.Provider value={{cartItems, countItemsInCart, addItem, removeItem, getTotalPrice, clearCart}}>
        {props.children}
    </cartContext.Provider>

}


 export default cartContext