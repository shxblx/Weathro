import { BellOutlined, CloseOutlined, MenuOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  console.log(menuIsOpen);

  return (
    <>
      <div className="flex justify-between m-2 ">
        <div className="text-[#3d52a0] font-extrabold text-3xl md:text-4xl">
          <p>Weathro</p>
        </div>
        <div className="hidden md:flex space-x-10 text-[#3d52a0] mt-3 mr-[120px] font-semibold ">
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

        <div className="hidden md:mt-3 mr-4">
          <BellOutlined className="text-3xl text-[#3d52a0]" />
        </div>
        {!menuIsOpen ? (
          <div className="md:hidden">
            <MenuOutlined
              onClick={() => setMenuIsOpen(!menuIsOpen)}
              className="text-[#3d52a0] text-2xl"
            />
          </div>
        ) : (
          <div className="md:hidden">
            <CloseOutlined
              onClick={() => setMenuIsOpen(!menuIsOpen)}
              className="text-3xl text-[#3d52a0]"
            />
          </div>
        )}
      </div>
      {menuIsOpen && (
        <div className="bg-white pb-10 pt-5 text-lg font-semibold space-y-6 pl-8 pr-[100px] text-[#3d52a0] rounded-md flex flex-col mt space-y-2">
          <p>Menu</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      )}
    </>
  );
};

export default Navbar;
