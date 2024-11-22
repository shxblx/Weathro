import { BellOutlined } from "@ant-design/icons";
import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div className="flex justify-between m-2">
        <div className="text-[#3d52a0] font-extrabold text-4xl ml-4">
          <p>Weathro</p>
        </div>
        <div className="flex space-x-10 text-[#3d52a0] mt-3 mr-[120px] font-semibold">
          <p
            className={`${
              location.pathname === "/" ? "border-b-4 border-[#3d52a0]" : ""
            }`}
          >
            Home
          </p>
          <p
            className={`${
              location.pathname === "/about"
                ? "border-b-4 border-[#3d52a0]"
                : ""
            }`}
          >
            About
          </p>
          <p
            className={`${
              location.pathname === "/about"
                ? "border-b-4 border-[#3d52a0]"
                : ""
            }`}
          >
            Contact
          </p>
        </div>

        <div className="mt-3 mr-4">
          <BellOutlined className="text-3xl text-[#3d52a0]" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
