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
  Login,
  SignUp,
  Checkout,
  OrderSuccess,
} from "./Pages";
import {
  UserProfile,
  UserAddress,
  UserOrders,
} from "./Pages/Profile/Components";
import MockMan from "mockman-js";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/productList/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mock" element={<MockMan />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="user" element={<UserProfile />} />
          <Route path="address" element={<UserAddress />} />
          <Route path="orders" element={<UserOrders />} />
        </Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/orderSuccess" element={<OrderSuccess />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishList"
          element={
            <PrivateRoute>
              <WishList />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
