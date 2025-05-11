import './App.css'
import {ProductPage} from "./pages/ProductPage.tsx";
import {useState} from "react";
import ProductData from "../src/data/productsData.json"
import {CartPage} from "./pages/CartPage.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {NavBar} from "./components/navbar/NavBar.tsx";
import {Footer} from "./components/footer/Footer.tsx";
import {Checkout} from "./pages/Checkout.tsx";

type CartItem = {
    id: number;
    name: string;
    price: {
        main: number;
        fractional: number;
    }
    quantity: number;
};

function App() {
    const [cart, setCart] = useState<CartItem[]>([]);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const totalInCents = cart.reduce((sum, item) =>
        sum + (item.price.main * 100 + item.price.fractional) * item.quantity, 0);
    const totalZl = Math.floor(totalInCents / 100);
    const totalGr = totalInCents % 100;

    const handleAddToCart = (product: CartItem) => {
        setCart(prevCart => {
            const existing = prevCart.find(p => p.id === product.id);
            if (existing) {
                return prevCart.map(p =>
                    p.id === product.id
                        ? { ...p, quantity: product.quantity }
                        : p
                );
            }
            return [...prevCart, product];
        });
    };

    const handleUpdateCart = (product: CartItem) => {
        setCart(prevCart =>
            prevCart.map(p =>
                p.id === product.id
                    ? { ...p, quantity: product.quantity }
                    : p
            )
        );
    };

    const handleRemoveFromCart = (productId: number) => {
        setCart(prevCart => prevCart.filter(p => p.id !== productId));
    };

  return (
      <Router>
          <NavBar
              totalItems={totalItems}
              totalZl={totalZl}
              totalGr={totalGr}
          />
          <Routes>
              <Route path="/" element={
                  <ProductPage
                      cart={cart}
                      products={ProductData}
                      onAddToCart={handleAddToCart}
                      onUpdateCart={handleUpdateCart}
                      onRemoveFromCart={handleRemoveFromCart}
                  />
              } />
              <Route path="/cart" element={
                  <CartPage
                      cart={cart}
                      onAddToCart={handleAddToCart}
                      onUpdateCart={handleUpdateCart}
                      onRemoveFromCart={handleRemoveFromCart}
                  />
              } />
              <Route path="/checkout" element={<Checkout cart={cart} />} />
          </Routes>
          <Footer/>
      </Router>
  )
}

export default App
