import React from "react";
import Navbar from "./Navbar";
import LandingCarousel from "./Home/LandingCarousel";
import InfoSection from "./Home/InfoSection";
import BasicCard from "./Home/BasicCard";
import FeaturesSection from "./Home/FeaturesSection";
import Testimonials from "./Home/Testimonials";
import CallToAction from "./Home/CallToAction";
import ContactForm from "./Home/ContactForm";
import Footer from "./Home/Footer";

const cards = [
  {
    id: 1,
    title: "High Quality",
    description: "Our products are made from the highest quality materials.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Affordable Prices",
    description: "We offer competitive prices on all our products.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Fast Delivery",
    description: "We ensure quick delivery to your doorstep.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Customer Support",
    description: "Our support team is available 24/7.",
    image: "https://via.placeholder.com/300x200",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <LandingCarousel />
      <main className="flex-1">
        <InfoSection />
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map(card => (
              <BasicCard key={card.id} card={card} />
            ))}
          </div>
        </div>
        <FeaturesSection />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
