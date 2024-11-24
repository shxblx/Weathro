import React from "react";

const SecondSec = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  return (
    <>
      <div className="flex justify-center mt-8 text-[#3d52a0] text-2xl font-bold">
        <p>Upcoming Weather</p>
      </div>
      <div className="flex space-x-3 md:space-x-10 justify-center mt-[30px]">
        <div className="bg-[#3d52a0] h-[150px] w-[200px] md:h-[200px] md:w-[150px] rounded-2xl"></div>
        <div className="bg-[#3d52a0] h-[150px] w-[200px] md:h-[200px] md:w-[150px] rounded-2xl"></div>
        <div className="bg-[#3d52a0] h-[150px] w-[200px] md:h-[200px] md:w-[150px] rounded-2xl"></div>
        <div className="bg-[#3d52a0] h-[150px] w-[200px] md:h-[200px] md:w-[150px] rounded-2xl"></div>
      </div>
    </>
  );
};

export default SecondSec;
