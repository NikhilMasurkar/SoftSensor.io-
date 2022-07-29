import "./App.css";
import Home from "./Home";
import Liked from "./Liked";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// const page_number = 1;
function App() {
  const [liked, setLiked] = useState([]);
  const [products, setProducts] = useState([]);
  // const [page , setPage]= useState(page_number)
  const handleLike = (product_id) => {
    if (liked.includes(product_id)) {
      let updated = liked.filter((id) => {
        return id !== product_id;
      });
      setLiked(updated);
    } else {
      let updated = [...liked, product_id];
      setLiked(updated);
    }
  };

 

  useEffect(() => {
    async function getData() {
      if (products.length === 0) {
        const resp = await fetch("https://fakestoreapi.com/products");
        const data = await resp.json();
        setProducts(data);
      }
    }
    getData();
  },);
// const scrollToEnd  = ()=>{
//   setPage(page+1)
// }
//   window.onscroll = function () {
//     if(window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight){
//       scrollToEnd()
//     }
//     setPage(0)
//     }
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                liked={liked}
                setLiked={setLiked}
                handleLike={handleLike}
              />
            }
          />
          <Route
            path="/:id"
            element={<Liked liked={liked} products={products} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
