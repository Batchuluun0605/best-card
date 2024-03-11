"use cient";
import FormatCurrency from "@/app/utils/FormatCurrency";
import React, { useContext } from "react";
import { shopCardContext } from "./Context";
type Props = {
  id: number;
  image: String;
  price: number;
  name: String;
};
const StoreItem: React.FC<Props> = ({ id, image, price, name }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useContext(shopCardContext);
  const quantity = getItemQuantity(id);
  return (
    <div className="w-[400px] border border-red-500 px-6 py-5">
      <img src={image} alt="" className="h-[200px] w-[400px] object-cover" />
      <div className="flex justify-between">
        <p>{name}</p>
        <p>{FormatCurrency(price)}</p>
      </div>
      {quantity === 0 ? (
        <button onClick={() => increaseCartQuantity(id)}>+ Add to Card</button>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-1">
            <button
              className="w-6 h-6 bg-yellow-600 rounded"
              onClick={() => decreaseCartQuantity(id)}
            >
              -
            </button>
            <div>
              <span>{quantity}</span> in Cart
            </div>
            <button
              className="w-6 h-6 bg-yellow-600 rounded"
              onClick={() => increaseCartQuantity(id)}
            >
              +
            </button>
          </div>
          <button
            className="bg-red-700 text-white p-3 rounded"
            onClick={() => removeFromCart(id)}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default StoreItem;
