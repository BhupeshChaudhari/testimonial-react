import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from "./Card";

function Testimonials(props) {
  let reviews = props.reviews;
  console.log("Inside Testimonial");
  console.log(reviews);

  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 > reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseMeHandler() {
    let ind = Math.floor(Math.random() * reviews.length);
    console.log(ind);
    setIndex(ind);
  }

  return (
    <>
      <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-xl">
        <Card review={reviews[index]}></Card>

        <div className="flex text-3xl mt-8 gap-3 text-violet-400 font-bold justify-center items-center">
          <button
            onClick={leftShiftHandler}
            className="cursor-pointer hover:text-violet-600"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={rightShiftHandler}
            className="cursor-pointer hover:text-violet-950"
          >
            <FiChevronRight />
          </button>
        </div>

        <div
          onClick={surpriseMeHandler}
          className="mt-6 bg-violet-400 hover:bg-violet-500 transition-all duration-200 rounded-md cursor-pointer px-10 py-3 font-bold text-white text-lg"
        >
          <button>Surprise Me</button>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
