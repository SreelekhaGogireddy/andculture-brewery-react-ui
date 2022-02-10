import * as React from "react";
import "../Styles/brewery.scss";
import { useLocation } from 'react-router-dom'
import GoogleMap from "../GoogleMap";
import { IBrewery,IBreweryDetailsState } from "./Interfaces/breweryListInterface";

export const BreweryDetails: React.FC<{}> = () => {
  const location = useLocation();
  const breweryData = location.state as IBreweryDetailsState;
  const breweryItem = breweryData.brewery;
  
  return (
    <div>
      <div className="app">
        <ul className="brewery-list">
          <div className="brewery-list-display">
            <h2 className="brewery-details-header">{breweryItem.id}</h2>
            <div className="brewery-details-Margin">
              {breweryItem.street}
              {breweryItem.city}
              {breweryItem.state}
              {breweryItem.postal_code}
            </div>
            <GoogleMap latitude={breweryItem.latitude} longitude={breweryItem.longitude} />
          </div>
        </ul>
      </div>
    </div>
  );
};
