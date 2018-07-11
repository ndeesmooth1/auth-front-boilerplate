import { combineReducers } from 'redux';
import auth from '../components/Auth/reducer';
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    auth,
    form: formReducer
})