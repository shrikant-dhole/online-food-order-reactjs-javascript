import React from "react";
import dineoutcss from "./dineOut.css";
import Collection from "../collection/collection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import Filters from "../filters/filters";
import ExploreSection from "../exploreSection/exploreSection";
import {DineOutData} from "../../data/dineOutData.js";

const collectionList = [
  {
    id: 1,
    title: "16 Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674839786.jpg",
    places: "16 places",
  },
  {
    id: 2,
    title: "13 Serene Rooftop places",
    cover:
      "https://b.zmtcdn.com/data/collections/66bee1c025922a59b8b1ab69a3a6b187_1675082109.jpg",
    places: "13 places",
  },
  {
    id: 3,
    title: "11 Best Insta-worthy Places",
    cover:
      "https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252825.jpg",
    places: "11 places",
  },
  {
    id: 4,
    title: "18 Blissful Breakfast Places",
    cover:
      "https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054253.jpg",
    places: "20 places",
  },
  {
    id: 5,
    title: "11 Newly Opened Restaurants",
    cover:
      "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674839413.jpg",
    places: "8 places",
  },
];

const diningFilters = [
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
    title: "Outdoor Seating",
  },
  {
    id: 4,
    title: "Serves Alchohol",
  },
  {
    id: 5,
    title: "Open Now",
  },
];
const diningList= DineOutData;

const Dineout=()=> {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filtersList={diningFilters} />
      </div>
      <ExploreSection
        list={diningList}
        collectionName="Best Dining Restaurants near you in Pune"
      />
    </div>
  );
}

export default Dineout;
