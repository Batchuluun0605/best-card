"use client";
import Navbar from "@/components/Navbar";
import React, { useContext } from "react";
import storeItem from "@/app/data/item.json";
import StoreItem from "@/components/StoreItem";
import ShoppingCartProvider, { shopCardContext } from "@/components/Context";
const page = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <h1>Store</h1>
      <div className="flex justify-between">
        {storeItem.map((item) => {
          return <StoreItem {...item} />;
        })}
      </div>
    </ShoppingCartProvider>
  );
};

export default page;
