import CardComponent from "./CardComponent";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const BodyComponent = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const newResList =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResList(newResList);
    setFilteredList(newResList);
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for restaurants, food and cuisines..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
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
          className="filter-btn"
          onClick={() => {
            const filterList = filteredList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredList(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((res) => (
          <CardComponent key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
