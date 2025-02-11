import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Global } from "../../Context/GlobalContext";

const ProductCard = ({ product }) => {
  const { category, price, image, stock, rating, name } = product;
  const { translate } = Global();
  const { productCard } = translate;
  const { ourProducts, buyNow, addToCart, viewDetails, whatsapp } = productCard;
  const [aosAnimation, setAosAnimation] = useState("fade-up");

  useEffect(() => {
    AOS.init();
    const updateAOS = () => {
      if (window.innerWidth >= 1024) {
        setAosAnimation("fade-left"); // Desktop
      } else {
        setAosAnimation("fade-up"); // Mobile & Tablet
      }
    };

    updateAOS();
    window.addEventListener("resize", updateAOS);
    return () => window.removeEventListener("resize", updateAOS);
  }, []);

  // Calculate Stars (with Half Star Support)
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      <section
        className="product-card p-3 shadow-lg rounded-md w-full bg-white
      sm:w-[90%] md:w-[30rem] lg:w-[23rem] h-[35rem] flex flex-col justify-evenly items-center"
        data-aos={aosAnimation}
      >
        {/* Product Image */}
        <div className="product-image w-full h-[60%] relative product-picture-add overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
          {/* Add to Cart Button */}
          <button
            disabled={stock <= 0}
            className={`flex justify-center items-center gap-[1rem] w-full py-2 hover:bg-[#000000ea] rounded-md relative md:absolute md:bottom-0 md:left-0 ${
              stock <= 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white"
            }`}
            aria-label="Add to Cart"
          >
            <Icon icon="bi:bag-plus" width="22" height="22" />
            <span className="mt-2">{addToCart}</span>
          </button>
        </div>

        {/* Card Items */}
        <div className="w-full p-2">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          {/* Product Rating */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(fullStars)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" />
            ))}
            {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
            {[...Array(emptyStars)].map((_, index) => (
              <FaRegStar key={index} className="text-gray-300" />
            ))}
          </div>

          {/* Product Category */}
          <p className="text-sm text-gray-600">{category}</p>
          {/* Product Price */}
          <p className="text-lg font-bold text-gray-800">${price}</p>
          {/* Product Stock Status */}
          <p
            className={`text-sm ${
              stock > 0 ? "text-green-600" : "text-red-600"
            } mt-2`}
          >
            {stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          {/* Mobile Add to Cart */}
          <button
            disabled={stock <= 0}
            className={`flex md:hidden justify-center items-center gap-[1rem] w-full py-1 bg-black hover:bg-neutral-700 text-white transition-colors duration-300 rounded-md ${
              stock <= 0 ? "bg-gray-400 cursor-not-allowed" : ""
            }`}
            aria-label="Add to Cart"
          >
            <Icon icon="bi:bag-plus" width="22" height="22" />
            <span className="mt-2">{addToCart}</span>
          </button>

          {/* Buy and WhatsApp Buttons */}
          <div className="flex justify-center items-center gap-4 flex-wrap md:flex-nowrap relative mt-5">
            {/* Buy Now Button */}
            <button
              disabled={stock <= 0}
              className={`flex gap-4 items-center py-1 px-2 w-full justify-center relative shadow-lg border-2 bg-black border-black text-white rounded-lg overflow-hidden
            after:absolute after:w-full after:h-full after:bg-white after:top-0 after:left-0 after:transition-transform after:duration-300 after:translate-x-full
            hover:after:translate-x-0 hover:text-black
            ${
              stock <= 0
                ? "bg-gray-400 cursor-not-allowed"
                : "hover:bg-opacity-80"
            }`}
              aria-label="Buy Now"
            >
              <Icon
                icon="mdi-light:cart"
                width="25"
                height="25"
                className="z-10 relative"
              />
              <span className="relative z-10">
                <Link to={"/order"}> {buyNow}</Link>
              </span>
            </button>

            {/* WhatsApp Button */}
            <button
              className="flex gap-4 items-center justify-center py-1 px-2 w-full relative shadow-lg border-2 border-[--secondary-color] text-[--secondary-color] rounded-lg overflow-hidden
            after:absolute after:w-full after:h-full after:bg-[--secondary-color] after:top-0 after:left-0 after:transition-transform after:duration-300 after:-translate-x-full
            hover:after:translate-x-0 hover:text-white"
              aria-label="Contact on WhatsApp"
            >
              <Icon
                icon="ic:baseline-whatsapp"
                width="24"
                height="24"
                className="relative z-10"
              />
              <span className="relative z-10">{whatsapp}</span>
            </button>
          </div>

          {/* View Details Button */}
          <button className="group flex w-full mt-4 justify-start p-1 hover:underline items-center">
            <span>{viewDetails}</span>
            <Icon
              icon="mdi-light:arrow-right"
              width="24"
              height="24"
              className="group-hover:translate-x-2 transition duration-300"
            />
          </button>
        </div>
      </section>
    </>
  );
};

// Prop Validation
// ProductCard.propTypes = {
//   category: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   image: PropTypes.string.isRequired,
//   stock: PropTypes.number.isRequired,
//   rating: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
// };

export default ProductCard;
