import { Routes, Route } from "react-router-dom";

import "./App.css";
import {
  Home,
  ProductList,
  Cart,
  WishList,
  ProductDetail,
  PageNotFound,
  Profile,
} from "./Pages";
import {
  UserProfile,
  UserAddress,
  UserOrders,
} from "./Pages/Profile/Components";
import MockMan from "mockman-js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/productList/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mock" element={<MockMan />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="user" element={<UserProfile />} />
          <Route path="address" element={<UserAddress />} />
          <Route path="orders" element={<UserOrders />} />
        </Route> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
