import React, { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const itemContext = createContext();

function Custom({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [profile, setProfile] = useState({});
  const [activeLink, setActiveLink] = useState("");
  const [book, setBook] = useState([]);

  const confirmLogin = (val) => {
    setLoggedIn(val);
  };
  const addToCart = (item) => {
    const existedData = cart.find((pd) => pd.title === item.title);
    if (!existedData) {
      setTotalPrice(totalPrice + item.price);
      setCart([...cart, item]);
      setItemsInCart(itemsInCart + 1);
      console.log(totalPrice);
    }
  };
  const CartItems = cart;

  const removeFromCart = (item) => {
    const index = cart.findIndex((prdt) => prdt.title === item.title);

    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setTotalPrice(totalPrice - cart[index].price);
      setCart(updatedCart);
      if (itemsInCart > 0) {
        setItemsInCart(itemsInCart - 1);
      }
    } else {
      console.log("Item not found in the cart");
    }
  };
  useEffect(() => {
    const up = JSON.parse(localStorage.getItem("Users"));
    if (up) {
      setProfile(up);
      setLoggedIn(true);
      const usercart = async () => {
        const userOther = { Email: up.Email };
        const response = await axios.post(
          "http://127.0.0.1:4001/cartfetch",
          userOther
        );
        setCart(response.data.usercart);
        setItemsInCart(response.data.usercart.length);
        const t = response.data.usercart.reduce(
          (totalPrice, pd) => totalPrice + parseFloat(pd["price"]),
          0
        );
        setTotalPrice(t);
      };
      usercart();
      
    }
  }, []);

  return (
    <itemContext.Provider
      value={{
        confirmLogin,
        loggedIn,
        setProfile,
        profile,
        setLoggedIn,
        addToCart,
        removeFromCart,
        itemsInCart,
        totalPrice,
        CartItems,
        setItemsInCart,
        setTotalPrice,
        setCart,
        cart,
        book,
        setBook,
        activeLink,
        setActiveLink,
      }}
    >
      {children}
    </itemContext.Provider>
  );
}
export { itemContext };
export default Custom;
