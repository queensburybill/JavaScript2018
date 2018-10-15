import React, { Component } from "react";

const products = [
  {
    id: 1,
    name: "Pizza",
    category: "uncategorized"
  },
  {
    id: 2,
    name: "Yoyo",
    category: "uncategorized"
  },
  {
    id: 3,
    name: "Men's Checkered Shorts LG",
    category: "uncategorized"
  },
  {
    id: 4,
    name: "Women's White Cami Top MD",
    category: "uncategorized"
  }
];

function InventoryCategory(props) {
  return (
    <div>
      <h2 className="h4">{props.title}</h2>
      <table className="table">
        <tbody>
          {props.products.map(product => {
            const key = "product-" + product.id;
            const labelId = "change-category-" + product.id;
            if (product.category === props.category) {
              return (
                <tr key={key}>
                  <td>{product.name}</td>
                  <td className="form-inline">
                    <label className="mr-2" htmlFor={labelId}>
                      Change Category
                    </label>
                    <select
                      className="form-control"
                      id={labelId}
                      onChange={e => props.move(product.id, e.target.value)}
                    >
                      <option value="uncategorized" />
                      <option value="foodDrink">Food &amp; Drink</option>
                      <option value="clothing">Clothing</option>
                      <option value="toys">Toys</option>
                    </select>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={e => props.delete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            } else return null;
          })}
        </tbody>
      </table>
    </div>
  );
}

class InventoryList extends Component {
  state = {
    lastId: 4,
    products: products
  };
  move = (id, category) => {
    this.setState({
      products: this.state.products.map(product => {
        if (product.id === id) product.category = category;
        return product;
      })
    });
  };
  delete = id => {
    this.setState({
      products: this.state.products.filter(product => {
        return product.id !== id;
      })
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Inventory</h1>

        <div className="card bg-light mb-4">
          <div className="card-body">
            <InventoryCategory
              title="Uncategorized Items"
              category="uncategorized"
              products={this.state.products}
              move={this.move}
              delete={this.delete}
            />
          </div>
        </div>
        <InventoryCategory
          title="Food and Drink"
          category="foodDrink"
          products={this.state.products}
          move={this.move}
          delete={this.delete}
        />
        <InventoryCategory
          title="Clothing"
          category="clothing"
          products={this.state.products}
          move={this.move}
          delete={this.delete}
        />
        <InventoryCategory
          title="Toys"
          category="toys"
          products={this.state.products}
          move={this.move}
          delete={this.delete}
        />
      </div>
    );
  }
}

export default InventoryList;
