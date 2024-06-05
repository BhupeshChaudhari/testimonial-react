import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card(props) {
  let review = props.review;
  console.log("Inside Card");
  console.log(review);

  return (
    <>
      <div className="flex flex-col md:relative transition-all duration-700">
        <div className="absolute top-[-7rem] z-[10] mx-auto">
          <img
            className="aspect-square rounded-full w-[150px] h-[140px] z-[25]"
            src={review.image}
            alt=""
          />
          <div className="w-[150px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-20] left-[10px]"></div>
        </div>

        <div className="text-center mt-7">
          <p className="tracking-wider font-bold text-2xl capitalize">
            {review.name}
          </p>
        </div>

        <div className="text-center mt-2">
          <p className="text-violet-900 uppercase text-sm">{review.job}</p>
        </div>

        <div className="text-violet-400 mx-auto mt-4">
          <FaQuoteLeft />
        </div>

        <div className="text-center mt-4 text-slate-500">{review.text}</div>

        <div className="text-violet-400 mx-auto mt-4">
          <FaQuoteRight />
        </div>
      </div>
    </>
  );
}

export default Card;
