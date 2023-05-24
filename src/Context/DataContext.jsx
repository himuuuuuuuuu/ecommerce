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

const DataContext = createContext();

function DataProvider({ children }) {
  const { token } = useAuth();
  const [state, dispatch] = useReducer(DataReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const productResponse = await GetProductList();
        if (productResponse.status == 200) {
          dispatch({ type: "GET_DATA", payload: {products: productResponse.data.products} });
        }

        const categoryResponse = await GetCategoryList();
        console.log(categoryResponse);
        if(categoryResponse.status == 200) {
          dispatch({type: "GET_CATEGORY", payload: {categories: categoryResponse.data.categories}})
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [token]);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  return useContext(DataContext);
}

export { DataProvider, useData };
