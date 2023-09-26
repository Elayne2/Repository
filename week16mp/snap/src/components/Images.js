import React from "react";

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src.medium}
          alt={image.photographer}
          className="gallery-image"
        />
      ))}
    </div>
  );
};

export default ImageGallery;