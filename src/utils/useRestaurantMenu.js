import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    console.log(resId);
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    // const newResInfo = json?.data?.cards[0]?.card?.card?.info;

    setResInfo(json.data);
    // console.log(json?.data?.cards[0]?.card?.card?.info?.name);
  };
  return resInfo;
};

export default useRestaurantMenu;
