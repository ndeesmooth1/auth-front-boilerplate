import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./components/App/App";
import Welcome from "./components/Welcome/Welcome";
import Signup from "./components/Auth/Signup/Signup";
import Feature from "./components/Feature/Feature";
import Signout from "./components/Auth/Signout/Signout";
import Signin from "./components/Auth/Signin/Signin";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={Feature} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
