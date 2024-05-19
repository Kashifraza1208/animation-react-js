import React from "react";
import Card from "./Card";

const Item2 = () => {
  return (
    <div
      className="lg:mt-36 mt-20 flex flex-col items-center justify-between px-1  lg:px-16 bg-transparent"
      style={{
        zIndex: "0",
      }}
    >
      <h1
        className="text-[rgb(236,227,253)] bg-transparent font-semibold mb-9 lg:mb-0 text-center text-2xl md:text-3xl lg:text-4xl"
        style={{
          lineHeight: "1.5em", // This adjusts the line height to be responsive
          zIndex: "0",
        }}
      >
        Apply On Any Section Or Enable For <br className="hidden md:block" />{" "}
        Whole Page
      </h1>
      <Card />
    </div>
  );
};

export default Item2;
