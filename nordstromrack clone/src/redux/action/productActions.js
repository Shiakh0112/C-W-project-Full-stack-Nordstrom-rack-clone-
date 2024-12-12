import axios from "axios";

export const fetchProduct = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_PRODUCT_DATA" });
    const res = await axios.get("http://localhost:5000/api/products");
    dispatch({ type: "FETCH_PRODUCTS", payload: res.data });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCTS_FAIL", payload: error.message });
  }
};
