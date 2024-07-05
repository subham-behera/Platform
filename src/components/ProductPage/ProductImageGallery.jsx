import React, { useState } from "react";

const ProductImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <img src={selectedImage} alt="Product" className="w-full h-auto object-cover rounded-lg mb-4" />
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Product Thumbnail"
            className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${selectedImage === image ? "ring-2 ring-blue-500" : ""}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
