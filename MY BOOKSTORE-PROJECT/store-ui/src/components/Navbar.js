import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { itemContext } from "./ItemContext";
import Profile from "./Profile";

function Navbar() {
  const { loggedIn, itemsInCart, totalPrice, setActiveLink, activeLink } =
    useContext(itemContext);

  const navItems = (
    <>
      <li>
        <Link
          to="/"
          className={`px-2 py-2 rounded ${activeLink === "/" ? "active " : ""}`}
          onClick={() => setActiveLink("/")}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/Course"
          className={`px-2 py-2 rounded ${
            activeLink === "/Course" ? "active " : ""
          }`}
          onClick={() => setActiveLink("/Course")}
        >
          Books
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className={`px-2 py-2 rounded ${
            activeLink === "/contact" ? "active" : ""
          }`}
          onClick={() => setActiveLink("/contact")}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/aboutus"
          className={`px-2 py-2 rounded  ${
            activeLink === "/aboutus" ? "active" : ""
          }`}
          onClick={() => setActiveLink("/aboutus")}
        >
          About Us
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto fixed top-0 right-o left-0 z-50 ">
        <div className="navbar bg-black shadow shadow-cyan-900 text-white">
          <div className="navbar-start ml-4">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-slate-800  rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <Link
              to="/"
              className={`sm:text-3xl font-bold cursor-pointer text-xl  text-yellow-300 ${
                activeLink === "/" ? "active " : ""
              }`}
              onClick={() => setActiveLink("/")}
            >
              crossword
            </Link>
          </div>
          <div className="navbar-end space-x-3 mr-4">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-lg">{navItems}</ul>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      {itemsInCart}
                    </span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">
                      {itemsInCart} Items
                    </span>
                    <span className="text-info">Subtotal: ₹{totalPrice}</span>
                    <div className="card-actions">
                      <Link
                        to="/cart"
                        className={`px-2 py-2 rounded ${
                          activeLink === "/profile" ? "active " : ""
                        }`}
                        onClick={() => setActiveLink("/profile")}
                      >
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {loggedIn ? (
              <Link
                to="/profile"
                className={`px-2 py-2 rounded ${
                  activeLink === "/profile" ? "active " : ""
                }`}
                onClick={() => setActiveLink("/profile")}
              >
                <button>
                  <FaUser className="h-8 w-8 text-sky-500 hover:text-sky-800" />
                </button>
              </Link>
            ) : (
              <div className="bg-pink">
                <Link
                  to="/login"
                  className="btn container mx-auto  bg-pink-500 p-2 text-sm sm:text-md hover:bg-pink-800 text-white hover:text-black h-2 w-16 sm:w-20 sm:h-4 "
                >
                  Log-In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
