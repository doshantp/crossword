import React from "react";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { itemContext } from "./ItemContext";
import { useContext } from "react";
import { toast } from "react-toastify";

function Profile() {
  const {
    setLoggedIn,
    profile,
    setProfile,
    setItemsInCart,
    setTotalPrice,
    setCart,
  } = useContext(itemContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.removeItem("Users");
    setLoggedIn(false);
    setProfile();
    setCart([]);
    setItemsInCart(0);
    setTotalPrice(0);
    toast.success("Logged Out Successfully");
    navigate("/");
  };
  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${month} ${day} ${year}`;
  }
  return (
    <>
      <section class="w-full overflow-hidden bg-black mt-12">
        <div class="flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="User Cover"
            class="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
          />

          <div class="sm:w-[80%] xs:w-[90%] mx-auto flex">
            <FaUser class="rounded-md text-white lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-sky-300 bg-black relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]" />

            <h1 class="w-full text-left my-4 sm:mx-4 xs:pl-4 text-grey-700 lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
              Hello,{profile.Firstname}
            </h1>
          </div>

          <div class="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            <p class="w-fit text-sky-400 text-4xl">Account Details</p>
            <div class="w-full my-auto py-6 flex flex-col justify-center gap-2 border-double  border-4 border-sky-900 rounded-xl p-4">
              <div class="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                <div class="w-full">
                  <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div class="flex flex-col pb-3">
                      <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        First Name
                      </dt>
                      <dd class="text-lg font-semibold">{profile.Firstname}</dd>
                    </div>
                    <div class="flex flex-col py-2">
                      <dt class=" text-gray-500 md:text-lg dark:text-gray-400">
                        Last Name
                      </dt>
                      <dd class="text-lg font-semibold">{profile.Lastname}</dd>
                    </div>
                    <div class="flex flex-col py-2">
                      <dt class=" text-gray-500 md:text-lg dark:text-gray-400">
                        User Since
                      </dt>
                      <dd class="text-lg font-semibold">
                        {formatDate(profile.createdAt)}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div class="w-full">
                  <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div class="flex flex-col pb-3">
                      <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Email
                      </dt>
                      <dd class="text-lg font-semibold">{profile.Email}</dd>
                    </div>

                    <div class="flex flex-col pt-3">
                      <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Phone Number
                      </dt>
                      <dd class="text-lg font-semibold">+91 {profile.Phone}</dd>
                    </div>
                    <div class="flex flex-col pt-3">
                      <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 ">
                        Address
                      </dt>
                      <dd class="text-lg text-white font-semibold">
                        {profile.Address}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="flex justify-center text-2xl text-green-500 hover:underline mt-4">
                <Link to={"/orders"}>
                  <p>Order History</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <button
          onClick={handleLogin}
          className="btn bg-red-500 text-white px-6 hover:bg-red-800 hover:text-black "
        >
          Logout
        </button>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Profile;
