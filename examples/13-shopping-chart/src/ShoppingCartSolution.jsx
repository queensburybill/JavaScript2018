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
              {
                // Put the total quantity of all items here
                props.totalQuantity
              }
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

// Changed to function
function ShoppingCartItems(props) {
  // This changes from "this.state.items" to "props.items"
  return Object.values(props.items).map(item => {
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
            value={item.quantity.toString()}
            onChange={e => {
              // Changing to callback here
              // "this.updateQuantity" becomes "props.updateQuantityCallback"
              props.updateQuantityCallback(item.productId, e.target.value);
            }}
          />
        </td>
      </tr>
    );
  });
}

// Changed to class
class ShoppingCartPage extends Component {
  // I literally copied and pasted this from ShoppingCartItems
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    };
    // Remember to bind "this" keyword "getTotalQuantity"
    this.getTotalQuantity = this.getTotalQuantity.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
  }
  // Add a function that calculates the total quantity
  getTotalQuantity(items) {
    return Object.values(items).reduce((accumulator, currentItem) => {
      return isNaN(currentItem.quantity)
        ? accumulator
        : accumulator + currentItem.quantity;
    }, 0);
  }
  // I literally copied and pasted this from ShoppingCartItems
  updateQuantity(productId, quantity) {
    this.setState(prevState => {
      let newState = Object.assign(prevState);
      newState.items[productId].quantity = isNaN(quantity)
        ? ""
        : parseInt(quantity);
      return newState;
    });
  }
  render() {
    return (
      <div>
        {/* Pass the totalQuantity down to Navbar here */}
        <Navbar totalQuantity={this.getTotalQuantity(this.state.items)} />
        <div className="container pt-4">
          <h1 className="h3">Shopping Cart</h1>
          <table className="table">
            <tbody>
              {/*
                * Changed "props.items" changes to "this.props.items"
                * We pass "this.updateQuantity" as a callback here
                */}
              <ShoppingCartItems
                items={this.state.items}
                updateQuantityCallback={this.updateQuantity}
              />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function ShoppingCartWrapper() {
  return (
    <div>
      <ShoppingCartPage items={items} />
    </div>
  );
}

export default ShoppingCartWrapper;
