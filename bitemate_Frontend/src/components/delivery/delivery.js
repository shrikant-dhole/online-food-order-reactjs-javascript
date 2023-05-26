import React from "react";
import deliverycss from "./delivery.css";
import Filters from "../filters/filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import DeliveryCollections from "./deliveryCollections/deliveryCollections";
import ExploreSection from "../exploreSection/exploreSection";
import { RestaurantsData } from "../../data/restaurantData";
const deliveryFilters = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faSort} />,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating:4.0+",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faSort} />,
    title: "Delivery Time",
  },
  {
    id: 4,
    title: "Great Offers",
  },
  {
    id: 5,
    title: "Pure Veg",
  },
];

const restaurantList = RestaurantsData;
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filtersList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <ExploreSection
        list={restaurantList}
        collectionName="Delivery Restaurants in Pune"
      />
    </div>
  );
};

export default Delivery;
