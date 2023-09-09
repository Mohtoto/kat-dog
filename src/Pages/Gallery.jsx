import React from "react";
import { gallery } from "../../data";

const Gallery = () => {
  return (
    <div className="row container">
      <div className="flex flex-wrap">
        {gallery.map((image, index) => (
          <div key={index} className="w-1/4 p-4">
            <img
              src={image}
              className="w-full h-[300px] object-cover"
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
