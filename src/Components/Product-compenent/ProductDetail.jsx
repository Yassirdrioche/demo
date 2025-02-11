import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Global } from "../../Context/GlobalContext";

const ProductDetail = ({
  title,
  price,
  description,
  detailedDescription,
  image,
  whatsappLink,
}) => {
  const [isToggled, setIsToggled] = useState(false);
  const { translate } = Global();
  const { productDetails } = translate;
  const { orderOnWhatsApp, moreDetails, addToCart } = productDetails;

  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center p-6 mt-20 gap-8">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center p-2 h-[30rem] bg-gray-100 rounded-lg shadow-lg"
      >
        <img
          src={image}
          alt={title}
          className="w-3/4 md:w-full h-full object-cover rounded-lg"
        />
      </motion.div>

      {/* Details Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2"
      >
        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <Icon
            icon="mdi:tag-outline"
            className="text-[#879F13]"
            width="28"
            height="28"
          />
          {title}
        </h2>
        <p className="text-2xl font-semibold text-gray-800 mt-2">${price}</p>
        <p className="text-lg text-gray-700 mt-3">{description}</p>

        {/* Add to Cart Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full bg-black flex justify-center items-center gap-3 text-white py-3 rounded-lg shadow-md hover:bg-opacity-85 transition-colors duration-300"
        >
          <Icon
            icon="bi:bag-plus"
            className="text-[#fff]"
            width="24"
            height="24"
          />
          <span>{addToCart}</span>
        </motion.button>

        {/* Detailed Description */}
        <div className="mt-5">
          <div
            className="flex items-center justify-center cursor-pointer bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition"
            onClick={() => setIsToggled(!isToggled)}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {moreDetails}
            </h3>
            <Icon
              icon="mdi:chevron-down"
              className={`text-[#879F13] flex justify-self-end transition-transform duration-300 ${
                isToggled ? "rotate-180" : ""
              }`}
              width="24"
              height="24"
            />
          </div>
          {isToggled && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-3 bg-gray-50 rounded-lg shadow-inner mt-2"
            >
              <p className="text-gray-700">{detailedDescription}</p>
            </motion.div>
          )}
        </div>

        {/* Order by WhatsApp Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mt-5 w-full bg-[--primary-color] flex justify-center items-center gap-3 text-white py-3 rounded-lg shadow-md hover:bg-[--dark-1] transition"
        >
          <Icon icon="fa-brands:whatsapp" width="24" height="24" />
          <span>{orderOnWhatsApp}</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProductDetail;
