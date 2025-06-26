import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    sla,
    costForTwo,
    areaName,
  } = resData?.info;

  return (
    <div
      className="resCard border border-[#ccccccee] rounded-xl p-3 m-2 w-[270px] h-[350px]
                 bg-[#1D5C76] hover:bg-[#17445A] transition-all duration-300
                 hover:scale-95 cursor-pointer text-white"
    >
      <img
        className="w-full h-[50%] object-cover rounded-xl"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt={name}
      />

      <h2 className="mt-2 font-semibold text-xl truncate">{name}</h2>
      <h4 className="text-sm text-gray-200 truncate">
        {cuisines.join(", ")}
      </h4>

      <ul className="mt-2 text-sm flex gap-4 items-center font-medium">
        <span className="bg-green-600 text-white px-2 py-[2px] rounded flex items-center gap-1">
          <FontAwesomeIcon icon={faStar} /> {avgRating}
        </span>
        <li>{sla.deliveryTime} min</li>
        <li>{costForTwo}</li>
      </ul>

      <p className="mt-1 text-sm text-gray-200 truncate">📍 {areaName}</p>
    </div>
  );
};

export default RestaurantCard;
