import React, { Component } from "react";

const items = {
  1234: {
    productId: 1234,
    name: "Blue Lightsaber",
    quantity: 10
  },
  5555: {
    productId: 5555,
    name: "Millennium Falcon",
    quantity: 1
  }
};

function Navbar(props) {
  return (
    <nav className="bg-primary">
      <ul className="nav nav-pills justify-content-end">
        <li className="nav-item">
          <a
            href=""
            className="nav-link rounded-0 active"
            onClick={e => e.preventDefault()}
          >
            Shopping Cart
            <span className="badge badge-warning ml-2">
              {/* TODO put the total quantity of all items here */ "#"}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

class ShoppingCartItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    };
    this.updateQuantity = this.updateQuantity.bind(this);
  }
  updateQuantity(productId, quantity) {
    this.setState(prevState => {
      let newState = Object.assign(prevState);
      // Restricting to numbers and empty values only
      newState.items[productId].quantity = isNaN(quantity)
        ? ""
        : parseInt(quantity);
      return newState;
    });
  }
  render() {
    // Converting the "items" object to an array
    return Object.values(this.state.items).map(item => {
      const key = `shopping-cart-item-${item.productId}`;
      const qauntityLabel = `quantity-${item.productId}`;
      return (
        <tr key={key}>
          <td>{item.name}</td>
          <td className="form-inline justify-content-end">
            <label htmlFor={qauntityLabel} className="mr-2">
              Quantity
            </label>
            <input
              type="number"
              id={qauntityLabel}
              min="0"
              className="form-control form-control-sm input-sm"
              value={
                item.quantity.toString() /* Converting to string to avoid errors */
              }
              onChange={e => {
                // Event handler that updates state
                this.updateQuantity(item.productId, e.target.value);
              }}
            />
          </td>
        </tr>
      );
    });
  }
}

function ShoppingCartPage(props) {
  return (
    <div>
      <Navbar />
      <div className="container pt-4">
        <h1 className="h3">Shopping Cart</h1>
        <table className="table">
          <tbody>
            <ShoppingCartItems items={props.items} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ShoppingCartWrapper() {
  return (
    <div>
      <ShoppingCartPage items={items} />
    </div>
  );
}

export default ShoppingCartWrapper;
