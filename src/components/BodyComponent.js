import CardComponent from "./CardComponent";
import { useState } from "react";
import restaurants from "../utils/mockData";

const BodyComponent = () => {
  const [resList, setResList] = useState(restaurants);

  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((res) => (
          <CardComponent key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
