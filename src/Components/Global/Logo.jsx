import { Link } from "react-router-dom";
import img from "../../assets/logo.png";
import "aos/dist/aos.css";
const Logo = () => {
  return (
    <>
      <div className="logo" data-aos="zoom-out">
        <Link to={"/"}>
          {" "}
          <img src={img} alt="" className="md:w-56 w-32" />
        </Link>
        {/* Added styling for better alignment */}
      </div>
    </>
  );
};

export default Logo;
