import React, { useState } from "react";
import avatar from "../../assets/image/Avatar.png";

export default function NavPartial() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className="relative items-center space-x-5 md:space-x-7 hidden md:flex">
        <a
          href="#"
          className="text-gray-400 hover:text-gray-500 text-sm md:text-base"
        >
          Kategori
        </a>
        <div className="relative">
          <img
            id="avatar"
            src={avatar}
            alt="avatar"
            className="w-8 h-8 md:h-12 md:w-12 rounded-md cursor-pointer"
          />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-3 space-y-3">
          <a href="#" className="block text-gray-600 hover:text-black">
            Kategori
          </a>
          <img
            src={avatar}
            alt="avatar"
            className="w-10 h-10 rounded-md cursor-pointer"
          />
        </div>
      )}
    </>
  );
}
