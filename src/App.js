import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import { Navbar, Cart, Checkout } from "./components";
import { commerce } from "./lib/commerce";
import ProductPage from "./components/ProductPage/ProductPage";
import Home from "./Screens/Home";
import DesktopPage from "./Screens/DesktopPAge";
import Accesors from "./Screens/Accesors";
import LaptopPage from "./Screens/LaptopPage";
import HoodiesPage from "./Screens/HoodiesPage";

import SneakersPage from "./Screens/SneakersPage";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      <Navbar totalItems={cart.total_items} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              cart={cart}
              products={products}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route path="/checkout" exact>
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
          <Route path="/product-details/:id">
            <ProductPage onAddToCart={handleAddToCart} />
          </Route>
          <Route path="/category/cat_LvJjoP6Bple0nO">
            <LaptopPage onAddToCart={handleAddToCart} />
          </Route>
          <Route path="/category/cat_VKXmwDbAX5rgDA">
            <HoodiesPage onAddToCart={handleAddToCart} />
          </Route>
          <Route path="/category/cat_eN1ql9xnp5z3ym">
            <DesktopPage onAddToCart={handleAddToCart} />
          </Route>
          <Route path="/category/cat_gnZO5kZ06o7MNq">
            <Accesors onAddToCart={handleAddToCart} />
          </Route>
          <Route path="/category/cat_8XO3wpAWxoYAzQ">
            <SneakersPage onAddToCart={handleAddToCart} />
          </Route>
          <Route path="/category/:id"></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
