import React from "react";
import motionText from "../assets/MotionArtEffect-logo.png";
import Item0 from "../components/Item0";
import Review from "../components/Review";
import Item1 from "../components/Item1";
import Item2 from "../components/Item2";
import Item3 from "../components/Item3";
import Item4 from "../components/Item4";

const Home = () => {
  return (
    <>
      <div
        className="flex flex-col lg:px-14 lg:py-9 px-3 py-3 lg:mt-0 mt-6"
        style={{
          zIndex: "1",
        }}
      >
        <div className="flex flex-col  lg:flex-row mt-14 justify-between">
          <div>
            <img src={motionText} alt="" className="w-44 lg:w-60" />
          </div>
          <button
            style={{
              fontFamily: " sans-serif",
              fontSize: "18px",
              fontWeight: "400",
            }}
            className="bg-[#ffffff] mb-3 font-medium lg:block hidden text-[rgb(13,5,31)] px-4 py-3 w-52 rounded-md hover:bg-transparent hover:border hover:text-white"
          >
            Purchase Now
          </button>
        </div>
        <Item0 />
        <Review />
        <Item1 />
        <Item2 />
        <Item3 />
        <Item4 />
      </div>
    </>
  );
};

export default Home;
