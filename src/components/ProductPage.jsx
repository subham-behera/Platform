import React from "react";
import Header from "./ProductPage/Header";
import ProductDetails from "./ProductPage/ProductDetails";
import ProductImageGallery from "./ProductPage/ProductImageGallery";
import ProductDescription from "./ProductPage/ProductDescription";
import RelatedProducts from "./ProductPage/RelatedProducts";
import Footer from "./ProductPage/Footer";

const product = {
  id: 1,
  name: "Modern Chair",
  price: "$199.99",
  images: [
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
  ],
  description: "A modern chair with a sleek design, perfect for any contemporary home.",
  relatedProducts: [
    {
      id: 2,
      name: "Stylish Sofa",
      price: "$299.99",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      name: "Comfortable Bed",
      price: "$399.99",
      image: "https://via.placeholder.com/300x200",
    },
    // Add more related products as needed
  ],
};

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProductImageGallery images={product.images} />
          <ProductDetails product={product} />
        </div>
        <ProductDescription description={product.description} />
        <RelatedProducts products={product.relatedProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
