import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Global } from "../Context/GlobalContext";

const AboutCosaluxe = () => {
  const { translate } = Global();
  const { aboutCosaluxe } = translate;
  const {
    title,
    description,
    details1,
    details2,
    details3,
    details4,
    discoverButton,
  } = aboutCosaluxe;
  return (
    <section className="bg-gradient-to-b from-white container  mx-auto to-gray-100 text-gray-900 py-16 px-6 md:px-20 lg:px-36 text-center">
      <motion.div
        className="max-w-4xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 flex justify-center items-center gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon
            icon="mdi:leaf-circle"
            className="text-[#879F13]"
            width="40"
            height="40"
          />
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <strong>{description}</strong>
        </motion.p>

        {/* Icons + Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {[
            {
              icon: "ph:drop-bold",
              text: details1,
            },
            {
              icon: "mdi:flask-empty-outline",
              text: details2,
            },
            {
              icon: "mdi:earth",
              text: details3,
            },
            {
              icon: "mdi:leaf",
              text: details4,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <Icon
                icon={item.icon}
                className="text-[#879F13]"
                width="32"
                height="32"
              />
              <p className="text-gray-800">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <motion.a
          href="#product"
          className="inline-flex items-center gap-3 bg-[--primary-color] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[--dark-1] transition duration-300 shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Icon
            icon="mdi:shopping-outline"
            className="text-white"
            width="26"
            height="26"
          />
          {discoverButton}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AboutCosaluxe;
