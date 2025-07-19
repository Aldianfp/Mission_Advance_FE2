import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import NavPartial from "../molecules/NavPartial";

export default function NavPar() {
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-10 py-4 flex justify-between items-center">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </header>
    </>
  );
}
