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
    <div className="w-[240px] h-[350px] m-[5px] p-[5px] rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-1/2 rounded"
        alt="item-image"
        src={CDN_IMAGE_URL + cloudinaryImageId}
      />
      <div className=" p-1">
        <h2 className=" font-bold text-xl mb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
          {name}
        </h2>
        <h5 className=" inline-block w-full whitespace-nowrap overflow-hidden overflow-ellipsis text-gray-700 text-base mb-2">
          {cuisines.join(", ")}
        </h5>
        <h5>⭐ {avgRating}</h5>
        <div className="pt-4 pb-2">
          <span class="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {costForTwo}
          </span>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component

export const withPromotedLabel = (CardComponent) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 rounded">
          Promoted
        </label>
        <CardComponent {...props} />
      </div>
    );
  };
};

export default CardComponent;
