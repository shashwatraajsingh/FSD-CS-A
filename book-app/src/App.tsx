import { useState } from "react";
import "./App.css";
import "./styles/BookCard.css";
import type { Book } from "./components/BookCard";
import BookCard from "./components/BookCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartView from "./components/CartView";
import { CartProvider, useCart, getCartItemCount } from "./context/CartContext";

const sampleBooks: Book[] = [
  {
    id: "1",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
    coverUrl:
      "https://images.unsplash.com/photo-1544937954-5b5f34f8b2f0?w=400&q=60&auto=format&fit=crop",
    rating: 4.7,
    description:
      "A classic book on pragmatic approaches to software development.",
  },
  {
    id: "2",
    title: "Clean Code",
    author: "Robert C. Martin",
    coverUrl:
      "https://images.unsplash.com/photo-1526318472351-c75fcf070ee3?w=400&q=60&auto=format&fit=crop",
    rating: 4.5,
    description: "Guides and best practices for writing maintainable code.",
  },
  {
    id: "3",
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    coverUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=60&auto=format&fit=crop",
    rating: 4.3,
    description: "Deep dive into JavaScript core mechanisms and behavior.",
  },
  {
    id: "4",
    title: "Design Patterns",
    author: "Erich Gamma et al.",
    coverUrl: "https://via.placeholder.com/160x240?text=Design+Patterns",
    rating: 4.2,
    description:
      "Foundational software design patterns explained with examples.",
  },
];

function AppContent() {
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItemCount = getCartItemCount(state.items);

  return (
    <div className="app-container">
      <Navbar
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      <main className="main-content">
        <div className="section-header">
          <h1>Featured Books</h1>
          <p>
            Discover our handpicked collection of programming and development
            books
          </p>
        </div>
        <section className="books-grid">
          {sampleBooks.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </section>
      </main>
      <CartView isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
