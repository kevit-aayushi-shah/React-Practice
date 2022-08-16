import Cart from "./Pages/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import Profile from "./Pages/Profile";
import { useEffect, useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const userSignUp = localStorage.getItem("userData");
    const userLogin = localStorage.getItem("userLogin");
    if (userSignUp !== "" || userLogin !== "") {
      setLogin(true);
    }
  }, []);
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {login && <Route path="/products" element={<Product />} />}
      {login && <Route path="/cart" element={<Cart />} />}
      {login && <Route path="/profile" element={<Profile />} />}
      {login && (
        <Route path="/products/:productId" element={<ProductDetail />} />
      )}
    </Routes>
  );
}

export default App;
