import React from "react";
// import page form "../"
import page from "../assets/page.png";
import section from "../assets/section.png";
import "../styles/gradient.css";

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center justify-between lg:mt-28 bg-transparent">
      <div
        className="flex flex-col p-12 card-gradient rounded-2xl h-auto lg:mb-40 lg:w-1/2"
        style={{
          border: "1px solid #332C42",
          boxSizing: "border-box",
        }}
      >
        <h1 className="bg-transparent text-[rgb(236,227,253)] font-medium  text-4xl">
          Apply On Section
        </h1>
        <p className="mt-5 mb-7 text-[rgb(154,146,171)] font-semibold bg-transparent text-md">
          Apply on section is a game-changer, offering an unparalleled way to
          manage applications directly from your website.{" "}
        </p>
        <div className="bg-transparent">
          <img src={section} alt="" className="bg-transparent" />
        </div>
      </div>
      <div
        className="flex flex-col p-12 card-gradient rounded-2xl lg:mt-28 lg:w-1/2"
        style={{
          border: "1px solid #332C42",
          boxSizing: "border-box",
        }}
      >
        <h1 className="bg-transparent text-[rgb(236,227,253)] font-medium  text-4xl">
          Apply On Page
        </h1>
        <p className="mt-5 mb-7 text-[rgb(154,146,171)] font-semibold bg-transparent text-md">
          Take your website to new heights with Motion Art for Elementor Embrace
          the power of motion and animation.
        </p>
        <img src={page} alt="" className="bg-transparent" />
      </div>
    </div>
  );
};

export default Card;
