import "./App.css";
import Home from "./Home";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// const page_number = 1;
function App() {
  const [products, setProducts] = useState([]);
  // const [page , setPage]= useState(page_number)

  useEffect(() => {
    async function getData() {
      if (products.length === 0) {
        const resp = await fetch("https://fakestoreapi.com/products");
        const data = await resp.json();
        setProducts(data);
      }
    }
    getData();
  });

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/:id" element={<Cart products={products} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
