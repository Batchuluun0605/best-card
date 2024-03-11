"use client";
import { useRouter } from "next/navigation";

import React from "react";

const Navbar = () => {
  const router = useRouter();
  const home = () => {
    router.push("/");
  };
  const about = () => {
    router.push("/about");
  };
  const store = () => {
    router.push("/store");
  };
  return (
    <div className="w-full bg-orange-500 flex justify-between p-3">
      <div className="flex gap-3  px-6 py-3 text-xl">
        <h2 onClick={home} className="cursor-pointer">
          Home
        </h2>
        <h2 onClick={store} className="cursor-pointer">
          Store
        </h2>
        <h2 onClick={about} className="cursor-pointer">
          About
        </h2>
      </div>
      <button className="">
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 1024 1024"
          version="1.1"
          className="bg-white p-2 rounded-3xl relative hover:bg-blue-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M960.1 258.4H245.8l-36.1-169H63.9v44h110.2l26.7 125 100.3 469.9 530 0.4v-44l-494.4-0.3-22.6-105.9H832l128.1-320.1z m-65 44L855.6 401H276.3l-21.1-98.6h639.9zM304.8 534.5L279.7 417h569.5l-47 117.5H304.8z"
            fill="#39393A"
          />
          <path
            d="M375.6 810.6c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52m0-20c-39.7 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.3-72-72-72zM732 810.6c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52m0-20c-39.7 0-72 32.2-72 72s32.2 72 72 72c39.7 0 72-32.2 72-72s-32.3-72-72-72zM447.5 302.4h16v232.1h-16zM652 302.4h16v232.1h-16z"
            fill="#E73B37"
          />
          <path d="M276.3 401l3.4 16-3.4-16z" fill="#343535" />
        </svg>
        <div className="w-6 h-6 rounded-3xl bg-red-600 text-white absolute top-12 right-3">
          3
        </div>
      </button>
    </div>
  );
};

export default Navbar;
