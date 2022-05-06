import React from "react";
import { Button } from "@material-ui/core";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    onUpdateCartQty(lineItemId, newQuantity);

  return (
    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
      <div className="w-1/4">
        <img
          src={item.image.url}
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-3/4">
        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
          {item.id}
        </p>
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-base font-black leading-none text-gray-800">
            {item.name}
          </p>
        </div>

        <div className="flex items-center justify-between pt-5 pr-6">
          <div className="flex itemms-center">
            <div className="flex justify-center items-center">
              <Button
                type="button"
                size="small"
                onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
              >
                -
              </Button>
              <h2 className="">{item.quantity}</h2>
              <Button
                type="button"
                size="small"
                onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
              >
                +
              </Button>
            </div>

            <Button
              variant="contained"
              type="button"
              color="secondary"
              onClick={() => onRemoveFromCart(item.id)}
            >
              Remove
            </Button>
          </div>
          <p className="text-base font-black leading-none text-gray-800">
            {item.price.formatted_with_symbol}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
