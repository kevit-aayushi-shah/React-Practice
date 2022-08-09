import Cart from './Pages/Cart'
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from './Pages/SignUp'
import Product from './Pages/Product'
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <Routes>
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path='/product' element={<ProductDetail/>}/>
    </Routes>
  );
}

export default App;
