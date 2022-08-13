import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store";

import "./App.css";

import Main from "./Pages/Main";
import Signup from "./Pages/Signup";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path=":post" element={<h1>dsd</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
