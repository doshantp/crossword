import React, { useEffect } from "react";
import Bookscards from "../components/Bookscard";
import axios from "axios";
import { itemContext } from "./ItemContext";
import { useContext } from "react";
import { useState } from "react";

function Course() {
  const { book, setBook } = useContext(itemContext);
  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getbook();
    console.log(book);
  }, []);

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto p-4 md:p-16 text-cyan-300">
        <div className=" items-center justify-center mt-12">
          <h1 className=" text-2xl font-semibold md:text-4xl text-yellow-200">
            A Wide Range Of Fiction,Non Fiction,Children's Book's,Comics & More
            <span className="text-yellow-300 bold">!!New & Noteworthy</span>
          </h1>
        </div>
        <div className="mt-4 mr-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ml-4 lg:ml-0">
          {book.map((item) => (
            <Bookscards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
