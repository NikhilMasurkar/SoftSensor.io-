import "./App.css";
import Home from "./Home";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  async function getData() {
    if (products.length === 0) {
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = await resp.json();

      setProducts(data);
    }
  }

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      (async () => {
        const resp = await fetch("https://fakestoreapi.com/products");
        const data = await resp.json();
        let newarr = [...products, ...data];
        setProducts(newarr);
      })();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/Cart:id" element={<Cart products={products} />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
