"use client";
import React from "react";

const Card = ({ image, title, price, originalPrice, discount }) => {
  return (
    <div className="bg-black rounded-lg shadow-md p-4 flex flex-col items-center text-white">
      <div className="h-48 w-full mb-4 relative">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain rounded-md"
        />
        <button className="absolute top-2 right-2 text-white">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col text-left">
          <div className="text-xl font-bold text-green-500">₹ {price}</div>
        </div>
        <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h18l-1 10H4L3 3zm0 0l3 9m6 9a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
