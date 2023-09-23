import React from "react";
import { gallery } from "../../data";

const Gallery = () => {
  return (
    <div className="row container">
      <div className="flex md:flex-wrap flex-col md:flex-row">
        {gallery.map((image, index) => (
          <div key={index} className="md:w-1/4 p-4">
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
