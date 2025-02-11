import React from "react";
import { Icon } from "@iconify/react";
import prod1 from "../../assets/picture/product1.png";
import prod2 from "../../assets/picture/product2.png";
import prod3 from "../../assets/picture/product3.png";
import { Link } from "react-router-dom";
import { Global } from "../../Context/GlobalContext";

const CartItems = () => {
  const { translate } = Global();
  const { cartWords } = translate;
  const {
    shoppingCart,
    cart,
    quantity,
    orderSummary,
    totalWord,
    action,
    updateCart,
    checkoutNow,
    productPicture,
  } = cartWords;

  const products = [
    {
      id: 1,
      name: "Furniture Set",
      color: "Coffee",
      price: 437,
      quantity: 4,
      img: prod1,
    },
    {
      id: 2,
      name: "Vintage Dining Set",
      color: "Brown",
      price: 945,
      quantity: 2,
      img: prod2,
    },
    {
      id: 3,
      name: "Studio Chair",
      color: "Deep Green",
      price: 597,
      quantity: 7,
      img: prod3,
    },
  ];

  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.1;
  const deliveryFee = 50;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="container mx-auto max-w-[90%] md:max-w-6xl p-4 md:p-10 mt-16">
      <h1 className="flex justify-center items-center gap-4">
        <Icon icon="ant-design:shopping-outlined" width="50" height="50" />
        <span className="mt-1 text-nowrap text-2xl md:text-3xl">
          {shoppingCart}
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Cart Items */}
        <div className="md:col-span-2 bg-white shadow-md rounded-lg p-4 md:p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-2 md:px-4">{productPicture}</th>
                <th className="py-2 px-2 md:px-4 text-center">{quantity}</th>
                <th className="py-2 px-2 md:px-4 text-center">{totalWord}</th>
                <th className="py-2 px-2 md:px-4 text-center">{action}</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="flex items-center gap-2 md:gap-4 py-4 px-2 md:px-4">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain"
                    />
                    <div>
                      <p className="font-semibold text-sm md:text-base">
                        {product.name}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-2 md:px-4 text-center">
                    <div className="flex items-center justify-between gap-2 border rounded-md">
                      <button className="bg-[--Tertiary-color] p-1 md:p-2 rounded-l-lg hover:bg-[--secondary-color] transition-colors duration-300">
                        <Icon icon="ion:remove" width="15" height="15" />
                      </button>
                      <span className="text-sm md:text-base">
                        {product.quantity}
                      </span>
                      <button className="bg-[--Tertiary-color] hover:bg-[--secondary-color] transition-colors duration-300 p-1 md:p-2 rounded-r-lg">
                        <Icon icon="ion:add-sharp" width="15" height="15" />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-2 md:px-4 text-center text-sm md:text-base">
                    ${(product.price * product.quantity).toFixed(2)}
                  </td>
                  <td className="py-4 px-2 md:px-4 text-center">
                    <button className="text-red-500">
                      <Icon icon="ion:trash-outline" width="20" height="20" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="mt-4 px-4 py-2  bg-[--secondary-color] hover:bg-[--primary-color] transition-colors duration-300  text-white rounded w-full flex items-center justify-center gap-2 md:gap-4">
            <Icon icon="cil:pencil" width="20" height="20" />
            <span className="text-sm md:text-base">{updateCart}</span>
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
            {orderSummary}
          </h3>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-bold">
            <span className="text-sm md:text-base">{totalWord}</span>
            <span className="text-sm md:text-base">
              ${total.toFixed(2)} USD
            </span>
          </div>
          <Link to={"/checkout"}>
            <button className="mt-4 w-full px-4 py-2 bg-[--secondary-color] hover:bg-[--primary-color] transition-colors duration-300 text-white rounded-lg text-sm md:text-base flex justify-center items-center gap-4">
              <Icon icon="mdi:cart-check" width="24" height="24" />

              <span>{checkoutNow}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
