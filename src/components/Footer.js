import { Link } from "react-router-dom";
import "../styles/gradient.css";

const Footer = () => {
  return (
    <div
      className="lg:flex items-center bg-[red] lg:justify-between justify-center lg:h-14 h-24 mt-8 pt-10 lg:pt-0 px-10 footer-gradient lg:mt-20"
      style={{
        zIndex: "10",
        position: "relative",
        bottom: "0",
        left: "0",
        right: "0",
      }}
    >
      <div>
        <p className="text-[#EDC3C4] items-center  font-semibold text-xs bg-transparent">
          © 2023 Copywrite. All rights reserved by QodeMatrix
        </p>
      </div>

      <div className=" flex  items-center justify-center bg-transparent lg:gap-11 gap-2 font-bold lg:pe-5 pe-0 text-sm lg:text-mg">
        <Link to="/" className="bg-transparent font-bold text-[#BA9DF6]">
          Documentation
        </Link>
        <Link to="/" className="bg-transparent font-bold text-[#BA9DF6]">
          Support
        </Link>
      </div>
    </div>
  );
};

export default Footer;
