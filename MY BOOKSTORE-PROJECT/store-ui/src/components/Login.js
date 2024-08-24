// import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { itemContext } from "./ItemContext.js";
import { toast } from "react-toastify";
// import { cartContext } from "./CartContext";
// import Profile from "./Profile";

function Login() {
  const {
    confirmLogin,
    profile,
    setProfile,
    setItemsInCart,
    setTotalPrice,
    setCart,
  } = useContext(itemContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [msg, setMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userInfo = {
      Email: email,
      Password: password,
    };

    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then(async (res) => {
        console.log(res.data);
        setProfile(res.data.user);
        const usercart = { Email: userInfo.Email };
        console.log(usercart);
        const response = await axios.post(
          "http://127.0.0.1:4001/cartfetch",
          usercart
        );
        setCart(response.data.usercart);
        setItemsInCart(response.data.usercart.length);
        const t = response.data.usercart.reduce(
          (totalPrice, pd) => totalPrice + parseFloat(pd["price"]),
          0
        );
        setTotalPrice(t);
        if (res.data) {
          toast.success("Login Successful");
          confirmLogin(res.data.user);
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-black ">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <div className="bg-green-800 shadow-md shadow-green-500 rounded-lg px-8 py-10 w-full max-w-md mt-12">
          <h1 className="text-2xl font-bold text-yellow-500 text-center mb-4">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-lg border-2 border-sky-200 px-3 py-2 shadow-sm text-black"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-lg border-2 border-sky-200 px-3 py-2 shadow-sm text-black"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-4">
              <p className="text-white text-xs mr-2">Don't have an account?</p>
              <Link to="/signup" className="text-blue-400 text-lg">
                Sign In
              </Link>
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-center text-white rounded-lg bg-pink-500 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Login
            </button>
          </form>
          <br />
          {/* <h1 className="text-black font-bold text-2xl">{msg}</h1> */}
        </div>
      </div>
      <div className="flex justify-center items-center py-4">
        <Footer />
      </div>
    </div>
  );
}

export default Login;
