import React from "react";
import { useState } from "react";
import Testmonials from "./components/Testimonials";
import reviews from "./Data";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-slate-300 h-[100vh] w-[100vw]">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Our Testimonials</h1>
          <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
          <Testmonials reviews={reviews}></Testmonials>
        </div>
      </div>
    </>
  );
}

export default App;
