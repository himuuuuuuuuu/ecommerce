import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import { useAuth } from "./AuthContext";

import { initialState } from "./InitialState";
import { DataReducer } from "./DataReduce";
import { GetProductList, GetCategoryList } from "../Service";
import { GetCartList } from "../Service/CartService";
import { GetWishList } from "../Service/WishService";
import { GetAddress } from "../Service/AddressService";
import { simpleString } from "../Component/Utils";

const DataContext = createContext();

function DataProvider({ children }) {
  const { token } = useAuth();
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const [loader, setLoader] = useState(false);

  // FILTERED BY CATEGORY:
  const categoryCheckedList =
    state.filterBy.category.length == 0
      ? state.productList
      : state.productList.filter((currentProduct) => {
          return state.filterBy.category.every((currentCategory) => {
            return (
              simpleString(currentCategory) ==
              simpleString(currentProduct.genre)
            );
          });
        });

  // FILTERED BY SORT:

  const sortCheckedList = state.filterBy.sort
    ? [...categoryCheckedList].sort((a, b) => {
        return state.filterBy.sort == "lowToHigh"
          ? a.price - b.price
          : b.price - a.price;
      })
    : categoryCheckedList;

  // FILTERED BY RATING:

  const ratingCheckedList =
    !state.filterBy.rating || state.filterBy.rating == 0
      ? sortCheckedList
      : sortCheckedList.filter((currentProduct) => {
          return currentProduct.rating > state.filterBy.rating;
        });

  const searchCheckedList = state.filterBy.searchText
    ? ratingCheckedList.filter((currentProduct) => {
        return simpleString(currentProduct.title).includes(
          simpleString(state.filterBy.searchText)
        );
      })
    : ratingCheckedList;

  useEffect(() => {
    let id;
    setLoader(true);
    (async () => {
      try {
        const productResponse = await GetProductList();
        if (productResponse.status == 200) {
          dispatch({
            type: "GET_DATA",
            payload: { products: productResponse.data.products },
          });
        }

        const categoryResponse = await GetCategoryList();
        if (categoryResponse.status == 200) {
          dispatch({
            type: "GET_CATEGORY",
            payload: { categories: categoryResponse.data.categories },
          });
        }

        if (token) {
          const cartListResponse = await GetCartList({ encodedToken: token });
          if (cartListResponse.status == 200) {
            dispatch({
              type: "GET_CART",
              payload: { cart: cartListResponse.data.cart },
            });
          }

          const wishListResponse = await GetWishList({ encodedToken: token });
          if (wishListResponse.status == 200) {
            dispatch({
              type: "GET_WISH",
              payload: { wishlist: wishListResponse.data.wishlist },
            });
          }

          const addressListResponse = await GetAddress({ encodedToken: token });
          if (addressListResponse.status == 200) {
            dispatch({
              type: "GET_ADDRESS",
              payload: addressListResponse.data.address,
            });
          }
        }
      } catch (err) {
        console.log(err);
      }

      setLoader(false);
      id = setTimeout(() => {
        setLoader(false);
      }, 1000);
    })();
    return () => clearTimeout(id);
  }, [token]);
  return (
    <DataContext.Provider
      value={{ state, dispatch, searchCheckedList, loader, setLoader }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  return useContext(DataContext);
}

export { DataProvider, useData };
