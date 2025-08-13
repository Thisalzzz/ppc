import React from "react";

const PropertyCard = ({ title, location, image, onExplore }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onExplore}
      className="relative w-auto h-[500px] rounded-[30px] overflow-hidden cursor-pointer group transition duration-300 hover:shadow-xl"
    >
      {/* Image with overlay */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      {/* Centered text */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-center text-white">
        <h3 className="text-4xl font-bold leading-tight">{title}</h3>
        <p className="text-2xl font-light mt-2">{location}</p>
      </div>
    </div>
  );
};

export default PropertyCard;