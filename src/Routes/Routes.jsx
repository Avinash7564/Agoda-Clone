import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Components/Booking/Dashboard";
import FilterBox from "../Components/Booking/FilterBox";
import { AppContext } from "../context/Provider";
import { LandingPage } from "../Pages/LandingPage/LandingPage";
import { Map } from "../Components/Map/Map";
import { Select } from "../Components/Select/Select";
// import { Milind } from "../Pages/Milind Page/Milind";

export const Routes = () => {
  let { searchedCity, setSearchedCity } = useContext(AppContext);
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/milind">
        {/* <Milind searchedCity={searchedCity} /> */}
        <Dashboard searchedCity={searchedCity} />
      </Route>
      <Route path="/hotel/:id">
        <FilterBox />
      </Route>
      <Route exact path="/avinash">
        <Select />
      </Route>
      <Route exact path="/map">
        <Map />
      </Route>
    </Switch>
  );
};
