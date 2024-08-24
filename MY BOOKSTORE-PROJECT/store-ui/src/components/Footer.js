import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { itemContext } from "./ItemContext";

function Footer() {
  const { setActiveLink, activeLink } = useContext(itemContext);
  return (
    <div>
      <footer className="footer footer-center p-4 md:p-10 text-red-200 rounded">
        <div>
          <nav className="grid grid-flow-col gap-4 text-white font-bold">
            <Link
              to="/"
              className={` hover:underline rounded ${
                activeLink === "/" ? "active " : ""
              }`}
              onClick={() => setActiveLink("/")}
            >
              Home
            </Link>
            <Link
              to="/course"
              className={` hover:underline rounded ${
                activeLink === "/Course" ? "active " : ""
              }`}
              onClick={() => setActiveLink("/Course")}
            >
              Books
            </Link>
            <Link
              to="/contact"
              className={` hover:underline rounded ${
                activeLink === "/contact" ? "active " : ""
              }`}
              onClick={() => setActiveLink("/contact")}
            >
              Contact
            </Link>
            <Link
              to="/aboutus"
              className={` hover:underline rounded ${
                activeLink === "/aboutus" ? "active " : ""
              }`}
              onClick={() => setActiveLink("/aboutus")}
            >
              About us
            </Link>
          </nav>
        </div>
        <div className="container mx-auto">
          <div className="text-slate-300">
            <p>
              Crossword Bookstores draws book lovers of all ages into a
              community where they can discover great books, engage with
              booklovers and meet their favourite literary personalities.
            </p>
          </div>
          <nav>
            <h6 className="footer-title text-blue-500">Legal</h6>
            <a className="link link-hover ml-4 text-sky-200">Terms of use</a>
            <a className="link link-hover ml-4 text-sky-200">Privacy policy</a>
            <a className="link link-hover ml-4 text-sky-200">Cookie policy</a>
          </nav>
        </div>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="text-blue-400 hover:text-blue-800 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a className="text-red-500 hover:text-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a className="text-blue-400 hover:text-blue-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a className="text-pink-500 hover:text-pink-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25px"
                height="25px"
                viewBox="0 0 50 50"
                className="fill-current"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <div className="border-t border-white w-full">
          <div>
            <aside>
              <p className="text-yellow-300 mt-4">
                Copyright © 2024 - All right reserved by Crossword Ltd.
              </p>
            </aside>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
