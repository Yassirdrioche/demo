import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Language from "./Language";

const Navlinks = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="flex items-center justify-center w-full">
        <div className="flex items-center justify-center md:gap-9 gap-4">
          {/* Home Icon (Visible only on larger screens) */}
          <section className="hidden md:block">
            <Link to="/">
              <Icon icon="ph:house-light" width="32" height="32" />
            </Link>
          </section>

          {/* Cart Section with Notification Badge */}
          <section className="relative inline-block">
            {/* Notification Badge (Shows the number of items in the cart) */}
            <span
              className="absolute flex items-center justify-center p-1 bg-[#879F13] text-white
              top-2 right-1 transform translate-x-1/2 -translate-y-1/2
              font-semibold h-5 w-5 rounded-full text-xs shadow-md"
            >
              1 {/* Hardcoded value, should be dynamic based on cart items */}
            </span>

            {/* Cart Icon with Link */}
            <Link
              to="/cart"
              className="flex items-center justify-center p-2 rounded-lg"
            >
              <Icon icon="ph:bag-light" width="32" height="32" />
            </Link>
          </section>

          {/* Language Selector */}
          <section className="relative hidden md:inline-block">
            <Language />
          </section>
        </div>
      </nav>
    </div>
  );
};

export default Navlinks;
