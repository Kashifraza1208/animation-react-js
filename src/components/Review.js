import React from "react";
import star from "../assets/star.png";
import g2 from "../assets/g2.png";
import w from "../assets/w.png";
import leaf from "../assets/leaf.png";

const Review = () => {
  return (
    <div
      className="flex flex-col lg:p-5 lg:mt-5 bg-transparent"
      style={{
        zIndex: "1",
      }}
    >
      <p className="text-[#DCD4ED] font-semibold text-center text-2xl mt-16 bg-transparent">
        Trusted by thousands of users around the world
      </p>
      <div className="flex bg-transparent flex-col lg:gap-0 gap-12 lg:flex-row items-center justify-between mt-14 lg:mt-24">
        <div className="flex items-center justify-center gap-3">
          <img src={leaf} alt="" />
          <div className="flex flex-col gap-5 bg-transparent">
            <img src={star} alt="" />
            <div className="flex text text-[rgb(154,149,169)] text-md font-bold gap-1">
              <span className="font-bold">4.5</span>
              <span className="font-bold">Score,</span>
              <span className="font-bold">9</span>
              <span className="font-bold">Reviews</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 bg-transparent">
          <img src={g2} alt="" />
          <div className="flex flex-col gap-5 bg-transparent">
            <img src={star} alt="" />
            <div className="flex text text-[rgb(154,149,169)] text-md font-bold gap-1">
              <span className="font-bold">4.5</span>
              <span className="font-bold">Score,</span>
              <span className="font-bold">9</span>
              <span className="font-bold">Reviews</span>
            </div>
          </div>
        </div>{" "}
        <div className="flex items-center justify-center gap-3 bg-transparent">
          <img src={w} alt="" />
          <div className="flex flex-col gap-5 bg-transparent">
            <img src={star} alt="" className="bg-transparent" />
            <div className="flex text text-[rgb(154,149,169)] bg-transparent text-md font-bold gap-1">
              <span className="font-bold bg-transparent">4.5</span>
              <span className="font-bold bg-transparent">Score,</span>
              <span className="font-bold bg-transparent">9</span>
              <span className="font-bold bg-transparent">Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
