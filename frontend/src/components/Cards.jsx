import React from "react";

function Cards({item}) {
  return (
    <>
      <div className="mx-4 p-5">
        <div className="card bg-base-100 e-full p-3 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
              style={{ width: "100%", height: "230px" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline px-2 py-4 hover:bg-pink-500 hover:text-white duration-300 cursor-pointer">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
    </>
  );
}

export default Cards;
