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

  // FILTER BY SORT:

  const sortCheckedList = state.filterBy.sort
    ? [...categoryCheckedList].sort((a, b) => {
        return (state.filterBy.sort == "lowToHigh"
          ? a.price - b.price
          : b.price - a.price);
      })
    : categoryCheckedList;

  // console.log(sortCheckedList);

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
      } catch (err) {
        console.log(err);
      }
    })();
  }, [token]);
  return (
    <DataContext.Provider value={{ state, dispatch, sortCheckedList }}>
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  return useContext(DataContext);
}

export { DataProvider, useData };
