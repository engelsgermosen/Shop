import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FiltrosProvider } from "./context/FiltrosContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./components/Home.jsx";
import { Carrito } from "./components/Carrito.jsx";
import { NotFound } from "./components/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <FiltrosProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </FiltrosProvider>
);
