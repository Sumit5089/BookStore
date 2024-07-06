import React from "react";

const Baner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-40">
          <div className="space-y-10">
            <h1 className="text-4xl font-bold text-center  tracking-tighter mt-3">
              "Discover Your Next Favorite Book at{" "}
              <span className="text-pink-500">Our Store!"</span>
            </h1>
            <p className=" text-gray-500 text-md">
              Welcome to our bookstore! Dive into a world of captivating
              stories, timeless classics, and the latest bestsellers. Enjoy a
              cozy reading environment and personalized recommendations to find
              the perfect book for you.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow outline-none" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-active btn-secondary px-2 mt-4">Secondary</button>
        </div>
        <div className=" order-1 w-full md:w-1/2">
          <img
            src="/book.svg"
            className="ml-5 mt-5"
            alt="img"
            style={{ width: "90%", height: "100%" }}
          />
        </div>
      </div>
      <br />
      
    </>
  );
};

export default Baner;
