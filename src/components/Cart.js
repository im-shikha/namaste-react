import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/slice/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="text-center m-14 p-10">
      <div className=" w-6/12 m-auto">
        {cartItems.length > 0 && (
          <button
            className=" m-2 p-2 bg-black text-white rounded"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        {cartItems.length === 0 && <EmptyCart />}
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
