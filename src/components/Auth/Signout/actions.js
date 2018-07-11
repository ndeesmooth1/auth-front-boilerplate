import axios from "axios";
import { AUTH_USER } from "../../../types/index";
import { AUTH_ERROR } from "../../../types/index";


export const signout = () => {
    localStorage.removeItem('token');

    return {
        type: AUTH_USER,
        payload:''
    }
}