import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    address: "",
  });
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      toast.error("Phone no. should be 10 Characters");
      return;
    }
    if (
      formData.firstname &&
      formData.lastname &&
      formData.email &&
      formData.phone &&
      formData.password &&
      formData.address
    ) {
      const userInfo = {
        Firstname: formData.firstname,
        Lastname: formData.lastname,
        Email: formData.email,
        Password: formData.password,
        Phone: formData.phone,
        Address: formData.address,
      };
      await axios
        .post("http://localhost:4001/user/signup", userInfo)
        .then((res) => {
          console.log(userInfo);
          if (res.data) {
            setSubmitted(true);
            setTimeout(() => {
              navigate("/");
            }, "2000");
          }
          // localStorage.setItem("Users", JSON.stringify(userInfo));
        })
        .catch((err) => {
          if (err.response) {
            console.log(err);
            toast.error("Error: " + err.response.data.message);
          }
        });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <div className="bg-slate-700 shadow-md shadow-white rounded-lg px-8 py-8 w-full  mt-8">
          {submitted ? (
            <div className="submitted-message text-center">
              <p className="text-xl text-white font-bold">
                Signed In Successfully!
              </p>
              <Link to="/" className="btn bg-pink-500 mt-4">
                Back
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <h1 className="text-2xl font-bold text-yellow-500 text-center mb-4">
                  Sign In
                </h1>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <div className="mb-2 p-2">
                    <label
                      htmlFor="firstname"
                      className="block text-lg font-medium text-white"
                    >
                      Firstname:
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="bg-gray-50 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-lg border-2 border-sky-200 px-3 py-2 shadow-sm text-black"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-2 p-2">
                    <label
                      htmlFor="lastname"
                      className="block text-lg font-medium text-white"
                    >
                      Lastname:
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="bg-gray-50 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-lg border-2 border-sky-200 px-3 py-2 shadow-sm text-black"
                      value={formData.lastname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-2 p-2">
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-white"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-gray-50 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-lg border-2 border-sky-200 px-3 py-2 shadow-sm text-black"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-2 p-2">
                    <label
                      htmlFor="password"
                      className="block text-lg font-medium text-white"
                    >
                      Password:
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="bg-gray-50 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-lg border-2 border-sky-200 px-3 py-2 shadow-sm text-black"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-2 p-2">
                    <label
                      htmlFor="phone"
                      className="block text-lg font-medium text-white"
                    >
                      Phone:
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="bg-gray-50 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-lg border-2 border-sky-200 px-3 py-2 shadow-sm text-black"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-2 p-2">
                    <label
                      className="block text-lg font-medium text-white "
                      htmlFor="address"
                    >
                      Address:
                    </label>
                    <textarea
                      rows={1}
                      cols={60}
                      id="address"
                      name="address"
                      className="bg-gray-50 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-lg border-2 border-sky-200 px-3 py-2 shadow-sm text-black "
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <p className="text-white text-sm mr-2">Have an account?</p>
                <Link to="/login" className="text-blue-400 text-xl">
                  Login
                </Link>
              </div>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-center text-white rounded-lg bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center py-4">
        <Footer />
      </div>
    </div>
  );
};

export default Signup;
