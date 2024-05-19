import React from "react";
import browser from "../assets/browser.png";

const Item3 = () => {
  return (
    <div
      className="flex flex-col  items-center justify-center mt-10 lg:mt-40 browser-gradient p-16 rounded-2xl"
      style={{
        border: "1px solid #332C42",
        boxSizing: "border-box",
      }}
    >
      <h1 className="text-[rgb(236,227,253)] font-medium text-center text-3xl bg-transparent">
        Supported by All Popular Browsers
      </h1>
      <p className="text-center mt-5 mb-7 text-[rgb(154,146,171)] font-semibold bg-transparent text-lg">
        Rest assured, Motion Art is designed to be compatible <br />
        with all major web browsers.
      </p>
      <div className="flex items-center justify-center bg-transparent">
        <img src={browser} alt="" className="bg-transparent" />
      </div>
    </div>
  );
};

export default Item3;
