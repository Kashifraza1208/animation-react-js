import React from "react";
import thumb from "../assets/thump.png";
import st from "../assets/st.png";
import curr from "../assets/curr.png";

const CardItem = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between lg:mt-14 gap-5 bg-transparent">
      <div
        className="flex flex-col cardItem-gradient  px-7 py-5 rounded-2xl lg:w-1/3"
        style={{
          border: "1px solid #332C42",
          boxSizing: "border-box",
        }}
      >
        <div className="bg-transparent ps-0 flex items-start justify-start">
          <img src={curr} alt="" className="bg-transparent" />
        </div>
        <h1 className="text-[rgb(236,227,253)] mt-10 font-medium text-center md:text-left text-2xl md:text-3xl bg-transparent">
          Light Weight
        </h1>
        <p className="mt-5 text-md lg:text-md mb-7 text-[rgb(154,146,171)]  font-semibold bg-transparent text-center md:text-left">
          Motion Art for Elementor is designed to be{" "}
          <br className="hidden md:block" /> lightweight.
        </p>
      </div>
      <div
        className="flex flex-col cardItem-gradient  px-7 py-5 rounded-2xl lg:w-1/3"
        style={{
          border: "1px solid #332C42",
          boxSizing: "border-box",
        }}
      >
        <div className="bg-transparent flex ">
          <img src={thumb} alt="" className="bg-transparent" />
        </div>
        <h1 className="text-[rgb(236,227,253)] mt-10 font-medium text-center md:text-left text-2xl md:text-3xl bg-transparent">
          100% Responsive
        </h1>
        <p className="mt-5 mb-7  text-[rgb(154,146,171)] text-md lg:text-md font-semibold bg-transparent text-center md:text-left">
          Create a consistent visual experience{" "}
          <br className="hidden md:block" /> across all devices.
        </p>
      </div>
      <div
        className="flex flex-col cardItem-gradient  px-7 py-5 rounded-2xl lg:w-1/3"
        style={{
          border: "1px solid #332C42",
          boxSizing: "border-box",
        }}
      >
        <div className="bg-transparent flex">
          <img src={st} alt="" className="bg-transparent" />
        </div>
        <h1 className="text-[rgb(236,227,253)] mt-10 font-medium text-center md:text-left text-2xl md:text-3xl bg-transparent">
          User Friendly Interface
        </h1>
        <p className="mt-5 mb-7 text-[rgb(154,146,171)] text-md lg:text-md font-semibold bg-transparent text-center md:text-left">
          Ensure a smooth experience for both <br className="hidden md:block" />{" "}
          applicants and administrators.
        </p>
      </div>
    </div>
  );
};

export default CardItem;
