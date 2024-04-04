import React from "react";
import { FaHouse } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function Header() {
  return (
    <div>
      <div className="flex justify-around">
        <div className="flex items-center gap-x-2">
          <FaHouse /> Home
        </div>
        <div className="border p-2 rounded-xl flex gap-x-4">
          <div className=" border-r-2 flex items-center gap-x-2">
            <FaLocationDot />
            <input type="text" placeholder="where to go ?" />
          </div>
          <div className=" border-r-2 flex items-center gap-x-2">
            <FaLocationDot />
            <input type="text" placeholder="where to go ?" />
          </div>
          <div className=" border-r-2 flex items-center gap-x-2">
            <FaLocationDot />
            <input type="text" placeholder="where to go ?" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
