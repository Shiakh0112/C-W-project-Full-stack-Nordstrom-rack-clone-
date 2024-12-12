const initialState = {
  products: [],
  error: null,
  loading: false,
};

// Reducer to handle product-related actions
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_PRODUCTS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_PRODUCTS_FAIL":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
