import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { WatchLaterProvider } from "./context/WatchLaterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WatchLaterProvider>
        <App />
      </WatchLaterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
