import { Link } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Header.css";
import logo from "../assets/logohy.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const itemsCount = getCartItemsCount();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src={logo} alt="HAKEY Logo" />
            <span className="logo-text">HAKEY</span>
          </Link>

          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Inicio
            </Link>
            <Link to="/catalog" onClick={() => setMenuOpen(false)}>
              Catálogo
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              Acerca de
            </Link>
          </nav>

          <div className="header-actions">
            <Link to="/cart" className="cart-button">
              <FiShoppingCart size={24} />
              {itemsCount > 0 && (
                <span className="cart-badge">{itemsCount}</span>
              )}
            </Link>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
