import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { data } from "../../Data/dataTest.js";
import { Global } from "../../Context/GlobalContext.jsx";

const Products = () => {
  const [products, setProducts] = useState(data);
  const { translate } = Global();
  const { productCard } = translate;
  return (
    <>
      <section
        className="bg-gradient-to-b from-white to-[--neutral-light] container mx-auto flex flex-col gap-[--golbal-gap] mt-[--space-between] shadow-md p-[--container-padding]"
        id="product"
      >
        <h1 className="text-center">{productCard.ourProducts}</h1>
        <div className="flex container mx-auto w-full flex-wrap justify-evenly">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
