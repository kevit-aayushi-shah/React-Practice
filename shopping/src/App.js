import Cart from './Pages/Cart'
import { Routes, Route , Navigate} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from './Pages/SignUp'
import Product from './Pages/Product'
import ProductDetail from './Pages/ProductDetail';
import Profile from './Pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path='/products/:productId' element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
