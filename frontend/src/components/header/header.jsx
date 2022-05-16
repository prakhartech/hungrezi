import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate =useNavigate()
const handleLocation =()=>{

  navigate("/")
}

  return (
    <div className="header max-width">
      <img
        src="https://lh3.googleusercontent.com/UphREUMvMordqmh-y257gtwlUIkha9S50J0o2tdhraV0Ll3LU63CJZ8hzi3_aBYW0OQo3A=s85"
        alt="Zomato-logo"
        className="header-logo"
        style={{cursor: "pointer"}}
        onClick={()=>{
          handleLocation()
        }}
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <span
                style={{ fontSize: "1.5em", color: "#d92662" }}
                class="iconify"
                data-icon="ci:location"
              ></span>
              <div>Bangalore</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <span
              style={{ fontSize: "2em" }}
              class="iconify"
              data-icon="ei:search"
            ></span>
            <input
              className="search-input"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>

        {/* <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image"
            alt="Profile"
          />
          <span className="header-username">Shuvam</span>
          <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
