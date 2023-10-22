import { CDN_IMAGE_URL } from "../utils/constants";

const CardComponent = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="card-container">
      <img
        className="card-image"
        alt="item-image"
        src={CDN_IMAGE_URL + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default CardComponent;
