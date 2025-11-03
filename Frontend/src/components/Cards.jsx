import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="p-4">
      <div className="card bg-base-100 w-80 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.image}
            alt={item.name}
            className="h-48 w-full object-cover rounded-t-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-semibold">
            {item.name}
            <div className="badge badge-secondary ml-2">{item.category}</div>
          </h2>
          <p className="text-sm text-gray-600">{item.title}</p>
          <div className="card-actions justify-between items-center mt-4">
            <div className="badge badge-outline text-sm px-3 py-2">
              {item.price}
            </div>
            <button className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 cursor-pointer px-3 py-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
