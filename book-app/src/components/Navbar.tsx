import React from "react";
import "../styles/Navbar.css";

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="nav-logo">📚</span>
        <h1>Book Store</h1>
      </div>

      <div className="nav-links">
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#" className="nav-link">
          Books
        </a>
        <a href="#" className="nav-link">
          About
        </a>

        <div className="cart-icon" onClick={onCartClick}>
          <span className="material-icons">shopping_cart</span>
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
