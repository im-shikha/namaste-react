import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info ?? {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ?? {};

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center mt-28">
      <h1 className="font-bold font-mono my-4 text-5xl">{name}</h1>
      <h2 className=" font-bold text-lg text-gray-600">
        {cuisines.join(", ")}
      </h2>
      <span className="mt-2 inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {costForTwoMessage}
      </span>
      {categories.map((c, i) => (
        //Controlled Component
        <RestaurantCategory
          key={c?.card?.card?.title}
          data={c?.card?.card}
          showItems={i == showIndex && isVisible ? true : false}
          setShowIndex={() => {
            setShowIndex(i);
            setIsVisible(!isVisible);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
