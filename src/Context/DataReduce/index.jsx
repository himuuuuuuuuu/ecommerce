import React from "react";

export function DataReducer(state, action) {
  switch (action.type) {
    case "GET_DATA": {
      return { ...state, productList: [...action.payload.products] };
    }
    case "GET_CATEGORY": {
      return {...state, categoryList: [...action.payload.categories]}
    }

    default: {
      return state;
    }
  }
}
