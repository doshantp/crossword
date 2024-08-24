// import React from "react";
import { useState } from "react";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { itemContext } from "./ItemContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Checkout = ({ onSubmit }) => {
  const {
    profile,
    totalPrice,
    cart,
    setItemsInCart,
    setTotalPrice,
    setCart,
    loggedIn,
  } = useContext(itemContext);
  const pricewithTax = totalPrice + 99 + 199;
  const [formData, setFormData] = useState({
    name: "",
    landmark: "",
    country: "",
    city: "",
    phone: "",
    email: "",
    state: "",
    zipcode: "",
    TotalPrice: pricewithTax,
    paymentmethod: "Pay on Delivery",
    cartitems: cart,
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      toast.error("Phone no. should be 10 Characters");
      return;
    }
    if (formData.zipcode.length !== 6) {
      toast.error("Zip code should be 6 Characters");
      return;
    }
    if (!loggedIn) {
      await axios.post("http://localhost:4001/guest", formData);
      
    }
    if (
      loggedIn &&
      formData.name &&
      formData.landmark &&
      formData.country &&
      formData.city &&
      formData.phone &&
      formData.email &&
      formData.state &&
      formData.TotalPrice &&
      formData.zipcode
    ) {
      await axios.post("http://127.0.0.1:4001/order",{ "Email": profile.Email, ...formData});
      toast.success("Ordered Successfully");
      // localStorage.setItem("OrderFormData", JSON.stringify(formData));
      setCart([]);
      setItemsInCart(0);
      setTotalPrice(0);
      const removeorderitems = { email: profile.Email };
      await axios.delete(
        `http://127.0.0.1:4001/removeorderitems/${removeorderitems.email}`
      );
      navigate("/");

      // setSubmitted(true);
    } else {
      setCart([]);
      setItemsInCart(0);
      setTotalPrice(0);
      navigate("/");
      toast.success("Ordered Successfully");
    }
  };

  return (
    <div className="">
      <section class=" py-8 antialiased bg-black md:py-16 mt-8">
        <form
          onSubmit={handleSubmit}
          class="mx-auto max-w-screen-xl px-4 2xl:px-0"
        >
          <ol class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
            <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-green-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                <svg
                  class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <Link to="/cart">Cart</Link>
              </span>
            </li>

            <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-yellow-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span class="flex items-center after:mx-2 after:text-green-200 after:content-['/'] dark:after:text-green-500 sm:after:hidden">
                <svg
                  class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Checkout
              </span>
            </li>

            <li class="flex shrink-0 items-center text-red-500">
              <svg
                class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Order summary
            </li>
          </ol>

          <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div class="min-w-0 flex-1 space-y-8">
              <div class="space-y-4">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Delivery Details
                </h2>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      for="your_name"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Your name*{" "}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Virat Kohli"
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="landmark"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Landmark*{" "}
                    </label>
                    <input
                      type="text"
                      id="landmark"
                      name="landmark"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Cp Place"
                      value={formData.landmark}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <div class="mb-2 flex items-center gap-2">
                      <label
                        for="select-country-input-3"
                        class="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Country*
                      </label>
                    </div>
                    <select
                      id="country"
                      name="country"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option>Select</option>
                      <option value="India">India</option>
                      <option value="Australia">Australia</option>
                      <option value="France">France</option>
                      <option value="Spain">Spain</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                  </div>

                  <div>
                    <div class="mb-2 flex items-center gap-2">
                      <label
                        for="select-city-input-3"
                        class="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        City*{" "}
                      </label>
                    </div>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Nagpur"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="phone-input-3"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Phone Number*{" "}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="1234567890"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="email"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Email*{" "}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="name@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="state"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      State*{" "}
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Maharashtra"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="zip_code"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Zip Code*{" "}
                    </label>
                    <input
                      type="text"
                      id="zipcode"
                      name="zipcode"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="600001"
                      value={formData.zipcode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Payment
                </h3>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="credit-card"
                          aria-describedby="credit-card-text"
                          type="radio"
                          name="payment-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          disabled
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="credit-card"
                          class="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          Credit Card{" "}
                        </label>
                        <p
                          id="credit-card-text"
                          class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Pay with your credit card
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="pay-on-delivery"
                          aria-describedby="pay-on-delivery-text"
                          type="radio"
                          name="payment-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          checked
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="pay-on-delivery"
                          class="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          Payment on delivery{" "}
                        </label>
                        <p
                          id="pay-on-delivery-text"
                          class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Cash or Upi on delivery
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="paypal-2"
                          aria-describedby="paypal-text"
                          type="radio"
                          name="payment-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          disabled
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="paypal-2"
                          class="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          Paypal account{" "}
                        </label>
                        <p
                          id="paypal-text"
                          class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Connect to your account
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-12 w-full space-y-6 sm:mt-12 lg:mt-0 lg:max-w-xs xl:max-w-md">
              <div class="flow-root">
                <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Subtotal
                    </dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">
                      ₹ {totalPrice}
                    </dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Wallet
                    </dt>
                    <dd class="text-base font-medium text-green-500">0</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Store Pickup
                    </dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">
                      ₹ 99
                    </dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Tax
                    </dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">
                      ₹ 199
                    </dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd class="text-base font-bold text-gray-900 dark:text-white">
                      ₹ {pricewithTax}
                    </dd>
                  </dl>
                </div>
              </div>

              <div class="space-y-3">
                <button
                  type="submit"
                  class="flex w-full items-center justify-center rounded-lg bg-pink-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
      <div className="flex justify-center items-center py-4">
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
