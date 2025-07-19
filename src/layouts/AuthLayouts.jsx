import React from "react";
import logo from "../assets/image/logo.png";
import avatar from "../assets/image/avatar.png";
import { Link } from "react-router-dom";

export default function AuthLayouts() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-10 py-4 flex justify-between items-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <div className="relative flex items-center space-x-5 md:space-x-7">
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
      </div>
    </header>
  );
}
