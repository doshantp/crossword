import React from "react";
import { useState } from "react";
import axios from "axios";

const Query = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      await axios.post("http://localhost:4001/query", formData);
      // localStorage.setItem("contactFormData", JSON.stringify(formData));
      setSubmitted(true);
    }
  };
  return (
    <div className=" container mx-auto max-w-md text-center text-white text-2xl">
      {submitted ? (
        <div className="submitted-message">
          <p>Thank you for your message! we will revert your email query</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4 ">
            <h1 className="text-4xl text-yellow-300 font-bold text-center mb-4">
              If You have any query?
            </h1>
            <label className="sm:text-2xl text-lg ml-4" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-black p-1 border border-white rounded-xl md:w-full lg:w-full xl:w-full w-full sm:w-64 ml-4"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4 ">
            <label className="sm:text-2xl text-lg ml-4" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-black border border-white rounded-xl p-1 w-full md:w-full lg:w-full xl:w-full sm:w-64 ml-4"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label className="sm:text-2xl text-lg ml-4" htmlFor="message">
              Query:
            </label>
            <textarea
              rows={4}
              cols={60}
              id="message"
              name="message"
              className="bg-black md:w-full lg:w-full xl:w-full border border-white rounded-xl p-1 w-full sm:w-64 ml-4  "
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="text-xl border  border-white bg-pink-500 hover:bg-pink-900 hover:text-black rounded-lg  p-4 md:p-2  ml-4 "
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Query;
