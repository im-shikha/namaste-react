import CardComponent, { withPromotedLabel } from "./CardComponent";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link, redirect } from "react-router-dom";
import useOnlineStatus from "./../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const BodyComponent = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const PromotedCardComponent = withPromotedLabel(CardComponent);

  const { loggedInUser, setUsername } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    const newResList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(newResList);
    setResList(newResList);
    setFilteredList(newResList);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full mt-28">
      <div className="flex">
        <div className="m-3">
          <input
            type="text"
            className="w-[330px] py-2 px-4 border-gray-400 rounded shadow"
            placeholder="Search for restaurants, food and cuisines..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => {
              console.log(searchText);
              const filterList = resList.filter(
                (res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  res.info.cuisines
                    .join(", ")
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setFilteredList(filterList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="m-3 cursor-pointer bg-black text-white font-semibold py-2 px-4 border rounded shadow"
          onClick={() => {
            const filterList = filteredList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredList(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className=" flex flex-wrap items-center">
          <label>UserName: </label>
          <input
            className="w-40 py-2 px-4 mx-2 border-gray-400 rounded shadow"
            placeholder="Type your name"
            value={loggedInUser}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {res.info.avgRating > 4.2 ? (
              <PromotedCardComponent resData={res} />
            ) : (
              <CardComponent resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
