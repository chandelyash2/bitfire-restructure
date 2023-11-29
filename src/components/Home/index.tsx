"use client";
import React from "react";
import Container from "../common/Container";
import LiveMatchesCard from "../common/LiveMatchesCard";
import { LiveHighlights } from "./LiveHighlights";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TrendingHiglights } from "./TrendingHiglights";
const Home = () => {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
  };
  const arr = [1, 2, 3, 4];
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <LiveHighlights />
        <TrendingHiglights />
        <LiveHighlights /> <LiveHighlights />
      </div>
    </Container>
  );
};

export default Home;
