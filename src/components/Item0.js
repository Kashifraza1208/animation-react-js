import React, { useEffect } from "react";
import "../styles/gradient.css";

const Item0 = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row  items-center lg:justify-between justify-center mt-16 lg:mt-24">
        <div
          className="flex flex-col font-thin lg:-mt-56 mb-7 "
          style={{
            lineHeight: "1.7em",
            zIndex: "2",
          }}
        >
          <p className="transform-website lg:text-lg text-lg  text-center">
            Transform <br /> Your Website
          </p>
          <p className="text-[rgb(201,194,217)] lg:text-lg text-lg text-center lg:mt-5 mt-5">
            With Motion <br /> Art Effect
          </p>
        </div>
        <div
          className="flex flex-col"
          style={{
            zIndex: "1",
          }}
        >
          <h1
            className="text-[rgb(238,229,255)] bg-transparent font-medium lg:text-left text-center lg:text-6xl text-4xl "
            style={{
              lineHeight: "1.2em",
              zIndex: "1",
            }}
          >
            Attract Your Visitors <br /> Attention With Colorful
          </h1>
          <h1 className="lg:text-6xl mt-4 font-semibold  lg:text-left text-center text-4xl text-gradient">
            Motion Art Effect
          </h1>
          <p
            className="mt-8 text-[rgb(154,146,171)]  lg:text-left text-center font-bold  lg:md text-md"
            style={{
              lineHeight: "30px",
              zIndex: "1",
            }}
          >
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution <br /> for seamlessly integrating captivating
            animations into your website.{" "}
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Item0;
