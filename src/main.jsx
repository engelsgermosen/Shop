import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FiltrosProvider } from "./context/FiltrosContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./components/Home.jsx";
import { Carrito } from "./components/Carrito.jsx";
import { NotFound } from "./components/NotFound.jsx";
import { ProductById } from "./components/ProductById.jsx";
import { CarritoProvider } from "./context/CarritoContext.jsx";
import { FetchProvider } from "./context/FetchContext.jsx";

createRoot(document.getElementById("root")).render(
  <FetchProvider>
    <FiltrosProvider>
      <CarritoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/producto/:id" element={<ProductById />} />
              <Route path="/carrito" element={<Carrito />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CarritoProvider>
    </FiltrosProvider>
  </FetchProvider>
);
