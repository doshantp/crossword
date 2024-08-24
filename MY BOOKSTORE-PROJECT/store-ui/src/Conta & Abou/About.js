import React from "react";
import Footer from "../components/Footer";
import cntimg from "./contactimg.jpg";
import cntiimg from "./contactx.jpg";
import cntiiimg from "./contactyy.jpg";

function About() {
  return (
    <>
      <div className="h-screen bg-black">
        <div className="w-full text-slate-300 bg-black overflow-hidden text-center">
          <div className="container">
            <div className="flex flex-wrap justify-center  mt-20   md:mt-24 space-x-4">
              <img
                className="w-52 h-64 rounded-lg mb-2 md:mb-0 ml-4 md:ml-0 "
                src={cntimg}
                alt="store img!"
              />
              <img
                className="w-52 h-64 rounded-lg "
                src={cntiimg}
                alt="store img!"
              />
              <img
                className="w-52 h-64 rounded-lg hidden md:block"
                src={cntiiimg}
                alt="store img!"
              />
            </div>
          </div>
          <h3 className="text-2xl text-white mt-8">About-Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left p-8">
            <div className="bg-slate-900 rounded-lg p-2">
              <p>
                Crossword Bookstores was founded in 1992 with a simple yet
                passionate mission – To positively impact the world through the
                power of reading and learning. Right from our first store in
                Mumbai to the 108 stores across 38 cities today, we have
                continued to serve and nurture our community of readers for over
                3 decades. As India's leading bookstore retailer, we champion
                books and nourish a love for the written word through a rich,
                handpicked collection covering numerous topics. Our stores are
                thoughtfully designed with interiors that inspire and relax,
                allowing quiet spaces to help you discover great books.
              </p>
            </div>
            <div className="bg-slate-900 rounded-lg p-2">
              <p>
                In addition to our diverse selection of books, we have premium
                stationery and toys, to make your life a little easier, and a
                lot more colourful! At Crossword, we enjoy curating special
                events across our stores. We take pride in introducing kids to
                the joy of reading through weekly reading sessions, events and
                other fun activities. We bring our patrons the exciting
                opportunity to meet new authors as well as literary giants.
                Crossword Bookstores draws book lovers of all ages into a
                community where they can discover great books, engage with
                booklovers and meet their favourite literary personalities.
              </p>
            </div>
          </div>
          <h3 className="text-white text-2xl mb-4">Store Locations</h3>
          <div className="flex flex-wrap justify-center">
          <p className="text-teal-400 flex flex-wrap text-xl ">
            <span className="ml-4">
              <span className="text-green-500">⚲</span>Mumbai{" "}
            </span>
            <span className="ml-4">
              <span className="text-green-500">⚲</span>Delhi
            </span>
            <span className="ml-4">
              <span className="text-green-500">⚲</span>Pune{" "}
            </span>
            <span className="ml-4">
              <span className="text-green-500">⚲</span>Nagpur{" "}
            </span>
            <span className="ml-4">
              <span className="text-green-500">⚲</span>Hydrabad
            </span>
            <span className="ml-4">
              <span className="text-green-500">⚲</span>Bangalore
            </span>
            <span className="ml-4">
              <span className="text-green-500">⚲</span>Chennai
            </span>
            <span className="ml-4">
              <span className="text-green-500">⚲</span>Kolkata
            </span>
            <span className="ml-4">
              <span className="text-green-500">⚲</span>Jaipur
            </span>
          </p>
          </div>
        </div>
        <div className="bg-black">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
