import React from "react";

export function DataReducer(state, action) {
  switch (action.type) {
    case "GET_DATA": {
      return { ...state, productList: [...action.payload.products] };
    }

    case "GET_CATEGORY": {
      return { ...state, categoryList: [...action.payload.categories] };
    }

    case "GET_CART": {
      return { ...state, cartList: [...action.payload.cart] };
    }

    case "GET_WISH": {
      return { ...state, wishList: [...action.payload.wishlist] };
    }

    case "GET_ADDRESS": {
      return { ...state, addressList: [...action.payload.address] };
    }

    case "FILTER_BY_SEARCH":
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          searchText: action.payload,
        },
      };

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

    case "RESET_FILTER":
      return {
        ...state,
        filterBy: { searchText: "", category: [], rating: "0", sort: "" },
      };

    case "ADDRESS_SELECTED":
      return {
        ...state,
        selectedAddress: state.addressList.find((currentAddress) => {
          return currentAddress._id === action.payload.addressId;
        }),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartList: [],
      };

    case "GET_ORDER":
      return {
        ...state,
        orderList: [...state.orderList, action.payload],
      };
    default: {
      return state;
    }
  }
}
