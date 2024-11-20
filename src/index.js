import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";  // Puedes agregar tu propio archivo de estilos CSS si lo necesitas.
import App from "./App";  // Importa el componente principal de tu aplicación (App.js)

// Este código monta la aplicación React en el contenedor #root del HTML
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


