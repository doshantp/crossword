import React, { useContext } from "react";
import { itemContext } from "./ItemContext";
import axios from "axios";
import { toast } from "react-toastify";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Cart() {
  const {
    CartItems,
    removeFromCart,
    itemsInCart,
    totalPrice,
    profile,
    loggedIn,
    setItemsInCart
  } = useContext(itemContext);
  // console.log(CartItems);
  // const loggedIn = false;

  const handleRemoveToCart = async (item) => {
    if (loggedIn) {
      const removecart = { Email: profile.Email, title: item.title };
      await axios.delete(
        `http://127.0.0.1:4001/removecart/${removecart.Email}/${removecart.title}`
      );
      toast.success("An Item has been removed from cart");
      removeFromCart(item);
      // setItemsInCart(0);
    } else {
      removeFromCart(item);
      toast.success("An Item has been removed from cart");
    }
    // removeFromCart(item);
  };
  return (
    <>
      {itemsInCart === 0 ? (
        <div className="mt-8">
          <h1 className="text-4xl text-white  flex justify-center">
            <span className="mt-32">"No Items in Your cart"</span>
          </h1>
        </div>
      ) : (
        <>
          <div className="font-bold flex justify-center mt-8">
            <h1 className="md:text-5xl text-3xl md:ml-8 text-blue-500 mt-16">
              Total Price:
              <span className="text-green-500 ">₹ {totalPrice}.</span>
            </h1>
          </div>
          <div className="flex justify-center mt-4">
            <Link to="/checkout">
              <button className="text-white bg-pink-600 hover:text-black hover:bg-pink-800 text-md rounded-lg px-4 py-2">
                Checkout
              </button>
            </Link>
          </div>
        </>
      )}
      <div className="min-h-screen md:mr-4 gap-x-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:ml-4  md:p-12 p-4 mr-2 md:mr-0">
        {CartItems.map((item) => {
          return (
            <>
              <div className="mt-2 flex flex-col gap-4 md:flex-row">
                <div className="card w-full md:h-80  md:w-64 gap-x-4 m-2 bg-sky-800 shadow-xl hover:scale-105 duration-200 hover:bg-slate-700">
                  <figure className="border-2 border-cyan-700 shadow-lg shadow-cyan-500 ">
                    <img
                      className="object-fill h-40 w-full md:w-64"
                      src={item.img}
                      alt="book"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-purple-100 text-lg">
                      {item.title}
                      <div className="badge badge-secondary text-xs">
                        {item.category}
                      </div>
                    </h2>
                    <p className="text-indigo-100">{item.name}</p>
                    <div className="card-actions justify-between">
                      <div className="badge  text-sm p-3 mt-1  text-blue-200">
                        ₹ {item.price}
                      </div>
                      <div class="ml-auto  ">
                        <button
                          onClick={() => handleRemoveToCart(item)}
                          className=" rounded-3xl text-sm p-1 mt-1 text-black bg-yellow-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
