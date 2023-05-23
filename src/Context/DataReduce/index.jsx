import React from "react";

export function DataReducer(state, action) {
  switch (action.type) {
    case "GET_DATA": {
      return { ...state, productList: [...action.payload] };
    }
    // case "GET_CATEGORY": {
    //     return {...state, }
    // }
    default: {
      return state;
    }
  }
}
