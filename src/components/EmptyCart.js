import React from "react";
import hunger from "../image_assets/hunger.png";

const EmptyCart = () => {
  return (
    <>
      <div className="bg-orange-200 text-centert">
        <img
          src={hunger}
          className="mx-2 my-6 w-full h-full sm:mx-auto sm:my-10 sm:p-4 sm:w-1/2 sm:h-1/2 content-center"
        />
      </div>

      <div className=" flex-none text-center">
        <h1 className="font-bold text-xl sm:font-bold sm:text-2xl">
          Your cart is empty.
        </h1>
        <p className="my-2 text-sm font-bold sm:my-2 sm:text-base sm:font-normal text-gray-500">
          Go to Home to view restaurants and order what you are craving for 😋.
        </p>
      </div>
    </>
  );
};

export default EmptyCart;
