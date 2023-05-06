import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" flex justify-between items-center h-24 maz-w-[1240px] mx-auto px-4 text-white ">
      <h1 className=" w-full text-3xl font-bold text-[#00df9a] ">OKay GD.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <HashLink to={"/#home"}>Home</HashLink>
        </li>
        <li className="p-4">
          <HashLink to={"/#about"}>About</HashLink>
        </li>
        <li className="p-4">
          <HashLink to={"/#contact"}>Contact</HashLink>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineCloseCircle size={25} className="fixed right-4 top-9" />
            ) : (
          <AiOutlineMenu size={22} />
        )}
      </div>
      
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full pt-4 border-r border-r-[#056244]  bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500"
        }
      >
        <h1 className=" w-full m-4 text-3xl font-bold text-[#00df9a] ">
          OKay GD.
        </h1>
        <ul className=" p-4 uppercase">
          <li className="p-4 border-b border-b-[#029566] ">
            <HashLink to={"/#home"}>Home</HashLink>
          </li>
          <li className="p-4 border-b border-b-[#029566] ">
            <HashLink to={"/#about"}>About</HashLink>
          </li>
          <li className="p-4 border-b border-b-[#029566] ">
            <HashLink to={"/#contact"}>Contact</HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
