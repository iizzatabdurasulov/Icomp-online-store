import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import PhoneNavbar from "./components/PhoneNavbar/PhoneNavbar";
import Footer from "./components/Footer/Footer";
import DetailPage from "./page/DetailPage/DetailPage";
import ScrollToTop from "./ScrollFix/ScrollTop";
import { Context } from "./hooks/Context";
import Basket from "./page/Basket/Basket";
import PlaceOrder from "./page/PlaceOrder/PlaceOrder";

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [comparison, setComparison] = useState([]);
  const [dbBasket, setDbBasket] = useState([]);
  const [countProduct, setCountProduct] = useState(0);
  const [showBasket, setShowBasket] = useState(false);

  const addToComparison = (product) => {
    if (!comparison.find((p) => p.id === product.id)) {
      setComparison([...comparison, product]);
    }
  };

  const addToFavorites = (product) => {
    if (!favorites.find((p) => p.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  const handleAddBasket = (singleProducts) => {
    setDbBasket((prevBasket) => {
      const isBasket = prevBasket.findIndex(
        (element) => element.id === singleProducts.id
      );

      if (isBasket !== -1) {
        const sameProduct = [...prevBasket];
        sameProduct[isBasket].countProduct = countProduct;

        return sameProduct;
      } else {
        return [...dbBasket, { ...singleProducts, countProduct }];
      }
    });
  };

  return (
    <div>
      <ScrollToTop />
      <Context.Provider
        value={{
          favorites,
          setFavorites,
          comparison,
          setComparison,
          dbBasket,
          setDbBasket,
          addToComparison,
          addToFavorites,
          showBasket,
          setShowBasket,
        }}
      >
        <Navbar />
        <PhoneNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}
