import React from "react";
import CardItem from "./CardItem";

const Item4 = () => {
  return (
    <div
      className="flex flex-col lg:mt-40 mt-8 bg-transparent"
      style={{
        zIndex: "2",
      }}
    >
      <h1
        className="text-[rgb(236,227,253)] font-medium text-center text-4xl bg-transparent"
        style={{
          lineHeight: "56px",
        }}
      >
        An All-Round Plugin With Powerful <br /> Features
      </h1>
      <p className="text-center mt-5 mb-7 text-[rgb(154,146,171)] font-semibold bg-transparent text-lg leading-relaxed">
        Whether you're a seasoned web designer or just starting out, Motion Art
        for <br /> Elementor seamlessly integrates with the Elementor platform,
        providing you <br /> with a seamless and intuitive experience.
      </p>
      <CardItem />
    </div>
  );
};

export default Item4;
