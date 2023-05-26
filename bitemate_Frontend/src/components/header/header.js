import React from "react";
import commoncss from "../../styles/commonClass.css";
import headercss from "./header.css";
import logo from "../../images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCaretDown,
  faMagnifyingGlass,
  faUser,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="max-width  header">
      <img src={logo} className="header-logo" alt="Bite Mate" />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="absolute-center location-icon"
              />
              <div>Pune</div>
            </div>
            <FontAwesomeIcon icon={faCaretDown} className="absolute-center" />
          </div>
          <div className="location-search-separater"></div>
          <div className="header-searchbar">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute-center search-icon"
            />
            <input
              placeholder="Search for restaurant, cuisine or dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <FontAwesomeIcon icon={faUser} className="header-profile-image" />
          <span className="header-username">Shrikant</span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="absolute-center profile-options-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
