import React from "react";
import { CDN_ITEM_IMAGE_URL } from "../utils/constants";
import noimage from "../image_assets/noimage.png";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/slice/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b border-black text-left flex"
        >
          <div className="w-9/12">
            <div className="flex-none py-2">
              <span className="font-mono">{item.card.info.name} - </span>
              <span className="mt-2 inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs max-w-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <button
              className="mt-20 mx-10 p-2 bg-white font-bold text-green-500 shadow-lg absolute rounded text-xs"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
            <img
              className="w-24 h-24 mx-4 rounded place-content-end"
              src={
                CDN_ITEM_IMAGE_URL + item?.card?.info?.imageId
                  ? CDN_ITEM_IMAGE_URL + item?.card?.info?.imageId
                  : noimage
              }
            />
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
