import React from "react";

import taboptioncss from "./tabOption.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faMotorcycle } from "@fortawesome/free-solid-svg-icons";

const tabs = [
  {
    id: 1,
    name: "Delivery",
    backdrop: "#FFFFBC",
    active_img:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"  ,
    inactive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
  },
  {
    id: 2,
    name: "DineOut",
    backdrop: "#FFFFBC",
    active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    inactive_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
  },
];

const TabOption = ({ activeScreen, setActiveScreen }) => {
  return (
    <div className="tab-option">
      <div className="max-width options-wrapper">
        {tabs.map((tab) => {
          return (
            <div
              onClick={() => setActiveScreen(tab.name)}
              className={`tab-item absolute-center curs-pointer ${
                activeScreen === tab.name && "active-tab"
              }`}
            >
              <div
                className=" tab-image-container absolute-center"
                style={{
                  backgroundColor: `${
                    activeScreen === tab.name ? tab.backdrop : ""
                  }`,
                }}
              >
                <img
                  className="tab-image"
                  alt={tab.name}
                  src={
                    activeScreen === tab.name
                      ? tab.active_img
                      : tab.inactive_img
                  }
                />
              </div>
              <div className="tab-name"> {tab.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabOption;
