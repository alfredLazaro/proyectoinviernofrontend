import { NavLink } from "react-router-dom";
import React from "react";

export default function NavBar() {
  function viewListAccommdations() {    
  }

  function viewListRestaurants() {}

  return (
    <>
      <div style={{ backgroundColor: "green", marginBottom: "1em" }}>
        <h1>NavBAr</h1>
        <div>
          <NavLink to='/hotels' exact activeClassName ="active">
            <button onClick={viewListAccommdations}>Ver alojamientos</button>
          </NavLink>

          <button onClick={viewListRestaurants}>Ver restaurantes</button>
        </div>
      </div>
    </>
  );
}
