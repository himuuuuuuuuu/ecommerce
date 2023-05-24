import React from "react";

export function DataReducer(state, action) {
  switch (action.type) {
    case "GET_DATA": {
      return { ...state, productList: [...action.payload.products] };
    }
    case "GET_CATEGORY": {
      return { ...state, categoryList: [...action.payload.categories] };
    }
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          category: state.filterBy.category.includes(action.payload)
            ? state.filterBy.category.filter((current) => {
                return !(current == action.payload);
              })
            : [...state.filterBy.category, action.payload],
        },
      };

    case "FILTER_BY_RADIO":
      return {
        ...state,
        filterBy: { ...state.filterBy, sort: action.payload },
      };

    case "FILTER_BY_RATING":
      return {
        ...state,
        filterBy: { ...state.filterBy, rating: action.payload },
      };

    default: {
      return state;
    }
  }
}
