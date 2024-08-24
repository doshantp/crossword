import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Bookscard from "./Bookscard";
import axios from "axios";
import { useState, useEffect } from "react";

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log(error);
      }
    };
    getbook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl text-cyan-300 container mx-auto md:px-20 px-4">
        <div className="text-center">
          <p className="mt-2">Happy World Book Day!</p>
          <p className="mt-2">
            Buy Some free Books on Crossword From 20-30 June 2024
          </p>
          <h1 className=" text-gray-50 font-semibold text-xl pb-2 mt-12">
            Free Offered Books
          </h1>
          <button className="btn bold mt-2 mb-2">Shop Now ↓</button>
        </div>
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Bookscard item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
