import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Home, ProductList, Cart, WishList, ProductDetail } from "./Pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
