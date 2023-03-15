import React from "react";
import Hero from "../Hero/Hero";
import Deals from "./DealsOfTheDay/Deals";

const MainBody = () => {
  return (
    <div>
      <Hero />
      <div>
        <Deals />
      </div>
    </div>
  );
};

export default MainBody;
