import React from "react";
import pencil from "../assets/pencil.png";
import "../styles/gradient.css";

const Item1 = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between mt-28 bg-transparent">
      <div className="flex flex-col bg-transparent">
        <h1
          className="text-[rgb(236,227,253)] bg-transparent lg:text-left text-center font-semibold text-2xl  lg:text-4xl leading-relaxed"
          style={{
            lineHeight: "1.7em",
          }}
        >
          Turn Your Cursor Into A Colorful Magic <br /> Wand & Charm Your
          Visitors
        </h1>
        <p className="mt-5 bg-transparent text-[rgb(125,121,139)] lg:text-left text-center font-semibold text-lg lg:text-xl">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse <br /> your website with visually stunning
          motion art elements.
        </p>
        <div className="flex bg-transparent lg:items-start items-center lg:justify-start justify-center mt-8">
          <button className="text-[#EAFFFF] bg-transparent p-5 w-80 lg:w-96 rounded-3xl lg:text-2xl text-1xl button-gradient-purchase">
            Purchase From Envato
          </button>
          <span>-</span>
        </div>
      </div>
      <div className="mt-3 bg-transparent">
        <img src={pencil} alt="" className="bg-transparent" />
      </div>
    </div>
  );
};

export default Item1;
