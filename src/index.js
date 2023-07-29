import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { WatchLaterProvider } from "./context/WatchLaterContext";
import { PlaylistProvider } from "./context/PlaylistContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WatchLaterProvider>
        <PlaylistProvider>
          <App />
        </PlaylistProvider>
      </WatchLaterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
