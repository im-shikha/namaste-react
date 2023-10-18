import CardComponent from "./CardComponent";
import restaurants from "../utils/mockData";

const BodyComponent = () => {
  return (
    <div className="body-container">
      <div className="res-container">
        {restaurants.map((res) => (
          <CardComponent key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
