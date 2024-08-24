import React from "react";
import store from "../store.jpg";
import Subscibe from "./Subscibe";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row text-cyan-300">
        <div className="w-full order-2 md:order-1 mw-1/2 md:mt-24 mt-12">
          <div className="space-y-12 ">
            <h1 className="text-4xl font-bold">
              <span className="text-pink-500">Books: </span> The Keys to
              Infinite Worlds!!
            </h1>
            <p className="text-xl ">
              “A reader lives a thousand lives before he dies.”
              <p className="text-end mr-4 text-yellow-500">
                – George R.R.Martin
              </p>
            </p>
            <div className="">
              <p className="text-zinc-200 space-y-2 ">
                <span className="text-xl text-zinc-100 font-bold space-y-2">
                  Stay In The Know
                </span>
                <br></br> Enter your email and stay updated on latest
                offers,discount and events near you.
              </p>
              <label className="input input-borderd mt-4 outline border border-cyan-300 flex bg-black items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="grow"
                  placeholder="Enter your Email"
                  required
                />
              </label>
            </div>
          </div>
          <a
            to="/subscribed"
            className="btn text-md text-white shadow-lg shadow-pink-500 bg-pink-500 mt-4"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Subscribe
          </a>
          <Subscibe />
        </div>
        <div className=" w-full order-1 mw-1/2 mt-20">
          <img
            className="md:px-2 md:ml-4 md:mt-12 w-92 h-92 px-4"
            src={store}
            alt="store img!"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Banner;
