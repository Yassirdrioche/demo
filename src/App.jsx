import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Icon } from "@iconify/react";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Navbar from "./Components/Global/Navbar";
import Footer from "./Components/Global/Footer";
import { InfinitySpin } from "react-loader-spinner";
import React, { useEffect, useState } from "react";
import Detail from "./Pages/Detail";
import CheckoutPage from "./Pages/CheckoutPage";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, []);
  if (!isLoading) {
    return (
      <div className="App absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <InfinitySpin
          visible={true}
          width="200"
          color="var(--primary-color)"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }
  return (
    <>
      {isLoading && (
        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product" element={<Product />} />
              <Route path="/details" element={<Detail />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </Router>

          <Footer />
          <div className="fixed bottom-[2rem] right-8 shadow-lg rounded-full whatsapp z-50 bg-[--Tertiary-color] p-1.5 ">
            <a href="https://wa.me/0718277592" target="_blank">
              <Icon
                icon="fa-brands:whatsapp"
                width="50"
                height="50"
                style={{ color: "#fff" }}
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
