import React, { useState } from "react";
import Header from "../components/header/header";
import TabOption from "../components/tabOption/tabOption";
import Footer from "../components/footer/footer";
import Delivery from "../components/delivery/delivery";
import Dineout from "../components/dineOut/dineOut";

function Home() {
  const [activeScreen, setActiveScreen] = useState("Delivery");

  const getScreen = (screen) => {
    switch (screen) {
      case "Delivery":
        return <Delivery/>;
      case "DineOut":
        return <Dineout/>;
      default:
        return  <Delivery/>;
    }
  };

  return (
    <>
      <Header />
      <TabOption
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
      />
      {getScreen(activeScreen)}
      <Footer />
    </>
  );
}

export default Home;
