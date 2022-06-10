import React from "react";

import StructuredNavbar from "../../Components/StructuredNavbar";
import Trending from "../../Components/Trending";
import OurClients from "../../Components/OurClient/OurClients";
import Footer from "../../Components/Footer";
import InfinitySliderContainer from "../../Components/InfinitySliderContainers";
import MainSlider from "../../Components/MainSlider";
import OurPresence from "../../Components/Presence";

const Homepage = () => {
  return (
    <>
      <StructuredNavbar />
      {/* <MainSlider /> */}
      <Trending />
      <InfinitySliderContainer />
      <OurPresence />
      <OurClients />
      <Footer />
    </>
  );
};

export default Homepage;
