import { useState } from "react";
import TrioPack from "../../assets/picture/pack1.jpg";
import { Global } from "../../Context/GlobalContext";
const TrioProduct = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const { translate } = Global();
  const { pack } = translate;
  const { ourOffers, orderNow, save } = pack;
  const products = [
    {
      id: 1,
      title: "1 LOTION ANTI-CHUTE",
      price: 149,
      oldPrice: null,
      discount: null,
      image:
        "https://i.pinimg.com/236x/0a/c6/d9/0ac6d90c536594136fab8cc0bfc26170.jpg",
    },
    {
      id: 2,
      title: "1 HUILE ANTI-CHUTE",
      price: 149,
      oldPrice: null,
      discount: null,
      image:
        "https://i.pinimg.com/474x/60/fc/e1/60fce1d92be2a1fe2f601586b28fa0ad.jpg",
    },
    {
      id: 3,
      title: "1 SHAMPOING ANTI-CHUTE",
      price: 119,
      oldPrice: null,
      discount: null,
      image:
        "https://i.pinimg.com/236x/3a/f6/97/3af697931fee3a67ed6fd61a37dc01c7.jpg",
    },
    {
      id: 4,
      title: "PACK ANTI-CHUTE (SHAMPOING + LOTION + HUILE)",
      price: 349,
      oldPrice: 419,
      discount: 70,
      image:
        "https://i.pinimg.com/236x/5c/c3/db/5cc3db62364f9180b8250fc5a56f4fec.jpg",
    },
    {
      id: 5,
      title: "PACK ANTI-CHUTE + 1 MASQUE",
      price: 399,
      oldPrice: 550,
      discount: 150,
      image:
        "https://i.pinimg.com/236x/ea/53/b8/ea53b83227779be4535ad6b19d80a9f9.jpg",
    },
  ];

  return (
    <main className="bg-gradient-to-b to-[--neutral-medium] from-white container mx-auto flex flex-col gap-[--golbal-gap] mt-[--space-between] shadow-md p-[--container-padding]">
      <h1 className="text-center">{ourOffers}</h1>
      <div className="flex flex-col md:flex-row w-full justify-center items-center md:items-start gap-[--space-between] ">
        {/* Product Image */}
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <img src={TrioPack} className="w-full rounded-lg" alt="Trio Pack" />
        </div>

        {/* Product List */}
        <div className="flex flex-col gap-3 w-full md:w-1/2">
          {products.map((product) => (
            <label
              key={product.id}
              className={`flex items-center justify-between p-3 border rounded-lg shadow-md cursor-pointer transition bg-white ${
                selectedOffer === product.id
                  ? "border-[#879F13] ring-2 ring-[#879F13]"
                  : ""
              }`}
              onClick={() => setSelectedOffer(product.id)}
            >
              <div className="flex items-center gap-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <h3 className="font-bold text-sm md:text-base">
                    {product.title}
                  </h3>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through mr-2 text-sm md:text-base">
                      {product.oldPrice} dhs
                    </span>
                  )}
                  <span className="text-red-600 font-bold text-sm md:text-base">
                    {product.price} dhs
                  </span>
                  {product.discount && (
                    <span className="bg-[--secondary-color] text-xs px-2 py-1 rounded-md ml-2">
                      {save} {product.discount} dhs
                    </span>
                  )}
                </div>
              </div>
            </label>
          ))}

          {/* Order Button */}
          <button
            disabled={!selectedOffer}
            className={`w-full py-3 text-lg md:text-xl rounded-md font-semibold transition mt-6 ${
              selectedOffer
                ? "bg-[#879F13] text-white hover:bg-[#6F8410]"
                : "bg-gray-100 text-gray-600 cursor-not-allowed"
            }`}
          >
            {orderNow}
          </button>
        </div>
      </div>
    </main>
  );
};

export default TrioProduct;
