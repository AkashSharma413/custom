import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import PersonalizedLiving from "./Components/PersonalizedLiving";
import MoreDesign from "./Components/MoreDesign";
import PersonalizedBanner from "./Components/PersonalizedBanner";
import TopPersonalizationPicks from "./Components/TopPersonalizationPicks";
import VideoAndOffer from "./Components/VideoAndOffer";
import TrendingHomeDecor from "./Components/TrendingHomeDecor";
import ProductVariety from "./Components/ProductVariety";
import Blog from "./Components/Blog";
import Info from "./Components/Info";
import Footer from "./Components/Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <PersonalizedLiving />
      <MoreDesign />
      <PersonalizedBanner />
      <TopPersonalizationPicks />
      <VideoAndOffer />
      <TrendingHomeDecor />
      <ProductVariety />
      <Blog />
      <Info />
      <Footer />
    </>
  );
};

export default Homepage;
