import React from "react";

const SecondSec = () => {
  return (
    <>
      <div className="flex justify-center mt-8 text-[#3d52a0] text-2xl font-bold">
        <p>Upcoming Weather</p>
      </div>
      <div className="flex space-x-20 justify-center mt-[30px]">
        <div className="bg-[#3d52a0] h-[200px] w-[150px] rounded-2xl"></div>
        <div className="bg-[#3d52a0] h-[200px] w-[150px] rounded-2xl"></div>
        <div className="bg-[#3d52a0] h-[200px] w-[150px] rounded-2xl"></div>
        <div className="bg-[#3d52a0] h-[200px] w-[150px] rounded-2xl"></div>
      </div>
    </>
  );
};

export default SecondSec;
