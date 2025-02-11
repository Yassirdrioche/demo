import { useEffect } from "react";
import FaceProd from "../../assets/picture/FaceProd.jpg";
import HearProd1 from "../../assets/picture/HearProd1.jpg";
import HearProd2 from "../../assets/picture/HearProd2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Posts = () => {
  useEffect(() => {}, []);
  const prods = [FaceProd, HearProd1, HearProd2];

  return (
    <>
      <main className="bg-gradient-to-b from-white to-[--neutral-light] container mx-auto flex flex-col gap-[--golbal-gap] mt-[--space-between] shadow-md p-[--container-padding] items-center">
        <h1 className="text-center">Notre Produits</h1>

        <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[--golbal-gap]">
          {prods.map((prod, index) => {
            // Determine AOS animation based on index
            let defaultIndex = index + 1;
            console.log(defaultIndex);
            const aosAnimation =
              defaultIndex === 1
                ? "fade-left"
                : defaultIndex === 2
                ? "fade-up"
                : defaultIndex === 3
                ? "fade-right"
                : ""; // Default empty if no condition matches

            return (
              <div
                data-aos={aosAnimation}
                key={defaultIndex}
                data-aos-duration={`${defaultIndex}000 - 500`}
                className="relative group h-[32rem]  overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-all"
              >
                {/* Image with Hover Effect */}
                <img
                  src={prod}
                  alt={`Product ${defaultIndex}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="px-4 py-2 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-200 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Posts;
