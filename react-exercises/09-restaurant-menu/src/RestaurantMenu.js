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
import "./RestaurantMenu.css"
import menuItemsData from "./RestaurantMenuItems.json"

const sections = Object.entries(menuItemsData);

// create any additional React components here

function MenuDishes(props) {
  return (
      <div className="MenuItem">
        <div className="MenuItem-row">
          <h3>{props.name}</h3>
          <div>{`$${Math.floor(props.price)}.00`}</div>
        </div>
        <p>{props.description}</p>
      </div>
  )
}

function MenuSections(props) {
  return (
    <div>
      <h2>{props.heading}</h2>
      {props.dishes.map((dish, i) => {
        return <MenuDishes 
          name={dish.name}
          price={dish.price}
          description={dish.description}
          key={`dish- ${i}`}
        />
      })}
    </div>
  );
}

function RestaurantMenu() {
  return (
    <main className="RestaurantMenu">
      <h1>Grandezza Del Cibo</h1>
      {sections.map((section, i) => {
        return <MenuSections 
          heading={section[0]}
          dishes={section[1]}
          key={`section- ${i}`}
          />
      })}
    </main>
  );
}

export default RestaurantMenu
