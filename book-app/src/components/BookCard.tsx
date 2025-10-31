import React from "react";
import "../styles/BookCard.css";
import { useCart } from "../context/CartContext";

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;
  rating?: number;
  description?: string;
}

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  const { dispatch } = useCart();
  const { title, author, coverUrl, rating = 0, description } = book;

  const stars = Array.from({ length: 5 }).map((_, i) => (
    <span key={i} className={i < Math.round(rating) ? "star filled" : "star"}>
      ★
    </span>
  ));

  return (
    <article className="book-card">
      <div className="cover-wrap">
        <img
          src={coverUrl || "https://via.placeholder.com/160x240?text=Cover"}
          alt={`${title} cover`}
          className="cover"
        />
      </div>
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">by {author}</p>
        <div className="book-rating" aria-label={`Rating: ${rating} out of 5`}>
          {stars}
          <span className="rating-number">{rating.toFixed(1)}</span>
        </div>
        {description && <p className="book-desc">{description}</p>}
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: book })}
          className="add-to-cart-btn"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default BookCard;
