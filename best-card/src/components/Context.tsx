"use client";
import React, { ReactNode, createContext, useState } from "react";
type props = {
  children: ReactNode;
};
type shopCardContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};
type CartType = {
  id: number;
  quantity: number;
};
export const shopCardContext = createContext({} as shopCardContext);

const ShoppingCartProvider = ({ children }: props) => {
  const [data, setData] = useState<CartType[]>([]);
  console.log(data);

  function getItemQuantity(id: number) {
    return data.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: number) {
    setData((data) => {
      if (data.find((item) => item.id === id) == null) {
        return [...data, { id, quantity: 1 }];
      } else {
        data.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: number) {
    setData((currItem) => {
      if (currItem.find((item) => item.id === id)?.quantity === 1) {
        return currItem.filter((item) => item.id !== id);
      } else {
        currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setData((currItem) => {
      return currItem.filter((item) => item.id !== id);
    });
  }
  return (
    <shopCardContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </shopCardContext.Provider>
  );
};

export default ShoppingCartProvider;
