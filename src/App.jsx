
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartContextProvider} from "./storage/cartContext";
import CartView from "./components/CartView"





function App() {
  
  return(
    <CartContextProvider>
    <BrowserRouter>
   <NavBar/>
   
    <Routes>
      <Route path="/" element={<ItemListContainer/> }/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/PrimeraEntregaReact-Almiron/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/PrimeraEntregaReact-Almiron" element={<ItemListContainer/>}/>
      <Route path="/category/:catid" element={<ItemListContainer/>}/>
      <Route path="/cart" element={<CartView/>}/>
    </Routes>
      <Footer/>
      </BrowserRouter>
      </CartContextProvider>
);  
}

export default App
