import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo1 from "../assets/logo-grabfood.svg";
import logo2 from "../assets/logo-grabfood-white.svg";
import iconCart from "../assets/icon-cart-default-black.svg"

function Navbar() {
  const [color, setColor] = useState(false);
  const location = useLocation();
  const isHomePage =
    location.pathname === "/GrabFood" || location.pathname === "/GrabFood/";

  const changeBackground = () => {
  const isScrolled = window.scrollY >= 70;
  const isHomePage = location.pathname === "/GrabFood" || location.pathname === "/GrabFood/";
  setColor(isScrolled && isHomePage);
};


  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [isHomePage]);

  return (
    <div
      className={`h-70 fixed top-0 left-0 right-0 flex items-center z-50 transition-colors duration-500 ease ${isHomePage ? (color ? 'bg-white drop-shadow-md' : 'bg-transparent') : (color ? 'bg-white ':'bg-white drop-shadow-md')}`}
    >
      <div className="container-navbar py-3 container-sm flex justify-between items-center ">
        <div className="w-40">
          <Link to="/GrabFood">
            <img
              className="transition-filter duration-500 ease"
              src={
                window.innerWidth <= 640  ? logo1 :(
                isHomePage ? (color ? logo1 : logo2) : logo1)}
              alt=""
            />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="btn btn-light rounded cart mr-5 hidden sm:block" >
            <a href="#" >
                <img  src={iconCart} alt="" />
            </a>
          </div>
          <div className="btn btn-light rounded logIn mr-5 ">Đăng nhập/ Đăng ký</div>
          <div className="btn btn-light rounded lang ">EN/</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
