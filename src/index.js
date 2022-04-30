import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import UserContextProvider from "./Context/Context.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <UserContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContextProvider>,
  document.getElementById("root")
);
