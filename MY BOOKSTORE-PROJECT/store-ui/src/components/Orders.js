import { itemContext } from "./ItemContext";
import { useContext } from "react";
import axios from "axios";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Orders() {
  const { profile } = useContext(itemContext);
  const [order, setOrder] = useState([]);
  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${month} ${day} ${year}`;
  }
  useEffect(() => {
  const fetchOrders = async () => {
    const userorders = { "Email": profile.Email };
    
    const response = await axios.post(
      "http://127.0.0.1:4001/ordersfetch",
      userorders
    );
    setOrder(response.data.userorders);
  };
  fetchOrders();
},[profile.Email]);

  return (
    <>

{order.length === 0 ? (
        <div className="mt-8 h-screen">
          <h1 className="text-4xl text-white  flex justify-center">
            <span className="mt-32">" No Orders "</span>
          </h1>
        </div>
      ) : (
        <>
          <div className="font-bold flex justify-center mt-8">
            <h1 className="md:text-5xl text-xl md:ml-8 text-blue-500 mt-16">
              Orders
            </h1>
          </div>
          
        </>
         )}

    <div className="h-screen">
      <div className="">
        {order.map((order, i) => (
          <>
            <section class="bg-black py-8  antialiased    md:py-12" key={i}>
              <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div class="mx-auto max-w-3xl">
                  <h2
                    class="text-xl mt-8 font-semibold text-gray-900 dark:text-white sm:text-2xl"
                    key={order._id}
                  >
                    Order Summary
                  </h2>

                  <div class="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Billing & Delivery information
                    </h4>

                    <dl>
                      <dt class="text-base text-lg font-bold text-white">
                        Order Id :-
                        <span className="text-slate-400">{order._id}</span>
                      </dt>
                      <dt class="text-base text-lg font-bold text-white">
                        Address :-
                        <span className="text-slate-400">
                          {order.city},{order.country}
                        </span>
                      </dt>
                      <dt class="text-base text-lg font-bold text-white">
                        Order date :-
                        <span className="text-slate-400">
                          {formatDate(order.createdAt)}
                        </span>
                      </dt>
                    </dl>
                  </div>

                  <div class="mt-6 sm:mt-8">
                    {order.cartitems.map((orderItem) => (
                      <div class="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                        <table class="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
                          <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                            <tr>
                              <td class="whitespace-nowrap py-4 md:w-[384px]">
                                <div class="flex items-center gap-4">
                                  <img
                                    class="hidden h-24 w-20 max-h-full dark:block"
                                    src={orderItem.img}
                                    alt="book image"
                                  />
                                  <p class="hover:underline">
                                    {orderItem.title}
                                  </p>
                                </div>
                              </td>

                              <td class="p-4 text-base font-normal text-gray-900 dark:text-white">
                                x1
                              </td>

                              <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                                ₹ {orderItem.price}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ))}
                    <div class="mt-4 space-y-6">
                      {/* <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Order summary
                      </h4> */}

                      <div class="space-y-4">
                        <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                          <dt class="text-lg font-bold text-gray-900 dark:text-white">
                            Total
                          </dt>
                          <dd class="text-lg font-bold text-gray-900 dark:text-white">
                            ₹ {order.TotalPrice}
                          </dd>
                        </dl>
                      </div>

                      <div class="gap-4 sm:flex flex justify-center sm:items-center">
                        <Link to="/course">
                          <button
                            type="button"
                            class="w-full rounded-lg px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 border-gray-600 bg-gray-400 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-gray-700"
                          >
                            Return to Shopping
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </>
        ))}
      </div>
      
      <div className="bg-black">
        <Footer />
      </div>
    </div>
    </>

  );
}

export default Orders;
