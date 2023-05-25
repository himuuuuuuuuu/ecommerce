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
import { simpleString } from "../Component/Utils";

const DataContext = createContext();

function DataProvider({ children }) {
  const { token } = useAuth();
  const [state, dispatch] = useReducer(DataReducer, initialState);

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

  useEffect(() => {
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
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [token]);
  return (
    <DataContext.Provider value={{ state, dispatch, ratingCheckedList }}>
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  return useContext(DataContext);
}

export { DataProvider, useData };
