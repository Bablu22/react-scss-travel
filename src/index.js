import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DestinationProvider from "./context/Providers/DestinationProvider";
import GalleryProvider from "./context/Providers/GalleryProvider";
import ModalProvider from "./context/Providers/ModalProvider";
import NavProvider from "./context/Providers/NavProvider";
import SharedProvider from "./context/Providers/SharedProvider";
import "./main.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavProvider>
      <ModalProvider>
        <DestinationProvider>
          <SharedProvider>
            <GalleryProvider>
              <App />
            </GalleryProvider>
          </SharedProvider>
        </DestinationProvider>
      </ModalProvider>
    </NavProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
