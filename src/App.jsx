import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import GameDetail from "./pages/GameDetail";
import Cart from "./pages/Cart";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/game/:id" element={<GameDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/about"
                element={
                  <div
                    className="container"
                    style={{ padding: "4rem 2rem", textAlign: "center" }}
                  >
                    <h1>Acerca de HAKEY</h1>
                    <p>Tu tienda de confianza para game keys</p>
                  </div>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
