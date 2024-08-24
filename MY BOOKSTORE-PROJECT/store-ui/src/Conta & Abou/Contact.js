import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Query from "./Query";

function Contact() {
  return (
    <>
      <div className="h-screen bg-black">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row text-cyan-300 bg-black">
          <div className="w-full order-2 md:order-1 mw-1/2 md:mt-24 mt-8">
            <div className="space-y-12 ">
              <h1 className="text-4xl text-green-300 font-bold">
                How Can We Help You?
              </h1>
              <div className="text-stone-50 space-y-4">
                <p>
                  For questions about your online order
                  <br></br>
                  <span className="font-semibold text-sky-300">
                    estore@crossword.in +91 8530206759
                  </span>
                </p>
                <p>
                  To advertise or supply to Crossword:
                  <br></br>
                  <span className="font-semibold text-sky-300">
                    naita.jagt@crossword.in +91 9967537455
                  </span>
                </p>
                <p>
                  For Corporate Orders and Bulk Gift Vouchers
                  <br></br>
                  <span className="font-semibold text-sky-300">
                    corporatesales@crossword.in +91 9820687058
                  </span>
                </p>
                <p>
                  For School Fairs:
                  <br></br>
                  <span className="font-semibold text-sky-300">
                    archa.jaga@crossword.in +91 9822849528
                  </span>
                </p>
                <p>
                  For everything else:
                  <br></br>
                  <span className="font-semibold text-sky-300">
                    contactus@crossword.in
                  </span>
                </p>
              </div>
            </div>
            <Link
              to="/"
              className="btn bg-pink-500 text-white hover:bg-pink-800 hover:text-black mt-4"
            >
              Back
            </Link>
          </div>
          <div className=" w-full order-1 mw-1/2 md:mt-24 mt-2 lg:mt-2">
            <div className="bg-black mt-24  mr-4 md:mr-0">
              <Query />
            </div>
          </div>
        </div>
        <div className="bg-black">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Contact;
