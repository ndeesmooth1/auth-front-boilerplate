import axios from "axios";
import { AUTH_USER } from "../../../types/index";
import { AUTH_ERROR } from "../../../types/index";

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3000/signin",
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};
