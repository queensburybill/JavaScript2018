/**
 * Build a restaurant using at least two React components.
 * Import the CSS file "./RestaurantMenu.css".
 * Import and loop through the data from "./RestaurantMenuItems.json"
 * Export the function "RestaurantMenu" as the default
 * You cannot have any errors or warmings in the console when you render the app
 * 
 * Here is the static HTML that you will convert to React components:
<main class="RestaurantMenu">
  <h1>Grandezza Del Cibo</h1>
  <!-- This part is repeated for each menu category (e.g. antipasto, salads and pasta) -->
  <div> <!-- this extra <div> tag may or may not be needed, depending on how you arrange your React components -->
    <h2>Antipasto</h2>
    <!-- This part is repeated for every item on the menu (e.g. antipasto, salads and pasta) -->
    <div class="MenuItem">
      <div class="MenuItem-row">
        <h3>Bruschetta</h3>
        <div>$8.00</div>
      </div>
      <p>Toasted baguette with marinated sweet peppers, fresh roma tomatoes, basil, olive oil, and a balamic glaze</p>
    </div>
  </div>
</main>
 */

import React from "react";
import "./RestaurantMenu.css";
import menuItems from "./RestaurantMenuItems.json";

function MenuItem(props) {
  return (
    <div className="MenuItem" key={props.key}>
      <div className="MenuItem-row">
        <h3>{props.name}</h3>
        <div>${props.price.toFixed(2)}</div>
      </div>
      <p>{props.description}</p>
    </div>
  );
}

function MenuCategory(props) {
  return (
    <div key={props.key}>
      <h2>{props.name}</h2>
      {props.items.map(item => {
        const key = `item-${item.name.replace(" ", "-").toLowerCase()}`;
        return <MenuItem {...item} key={key} />;
      })}
    </div>
  );
}

function RestaurantMenu() {
  return (
    <main className="RestaurantMenu">
      <h1>Grandezza Del Cibo</h1>
      {Object.keys(menuItems).map(category => {
        const key = `category-${category}`;
        const items = menuItems[category];
        return <MenuCategory name={category} items={items} key={key} />;
      })}
    </main>
  );
}

export default RestaurantMenu;
