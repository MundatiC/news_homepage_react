import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NewsSection from "./components/NewsSection";
import FeaturedSection from "./components/FeaturedSection";
import "./App.css";

const App = () => {
  return (
    
      <main className="mainBody">
        <Navbar />
        <HeroSection />
        <NewsSection />
        <FeaturedSection />
      </main>
    
  );
};

export default App;
