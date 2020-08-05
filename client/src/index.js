import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import "./style/main.scss";
import Store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <ToastContainer />
        <Routes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
