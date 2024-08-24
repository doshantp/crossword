import axios from "axios";
import React, { useContext } from "react";
import { itemContext } from "./ItemContext";
import { toast } from "react-toastify";

function Bookscard({ item }) {
  const { addToCart, setLoggedIn, loggedIn, profile } = useContext(itemContext);
  const handleAddToCart = async (item) => {
    if (loggedIn) {
      addToCart(item);
      console.log(item.price);
      setLoggedIn(true);
      console.log("log" + loggedIn);
      const cart = {
        Email: profile.Email,
        name: item.name,
        price: item.price,
        category: item.category,
        img: item.img,
        title: item.title,
      };
      console.log(cart);
      await axios.post("http://127.0.0.1:4001/cart", cart);
      toast.success("An Item has been added to cart");
    } else {
      addToCart(item);
      toast.success("An Item has been added to cart");
    }
  };

  return (
    <>
      <div className="mt-4">
        <div className="card w-88 h-full gap-x-4 m-2 bg-sky-800 shadow-xl hover:scale-105 duration-200 hover:bg-slate-700">
          <figure className="border-2 border-cyan-700 shadow-lg shadow-cyan-500 ">
            <img className="object-fill h-60 w-96" src={item.img} alt="book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-purple-100 text-2xl">
              {item.title}
              <div className="badge badge-secondary text-xs">
                {item.category}
              </div>
            </h2>
            <p className="text-indigo-100">{item.name}</p>
            <div className="card-actions justify-between">
              <div className="badge  text-sm p-5 mt-1  text-blue-200">
                ₹ {item.price}
              </div>
              <div class="ml-auto  ">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="btn btn-primary rounded-3xl text-xs bg-yellow-500"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookscard;
