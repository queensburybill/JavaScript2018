import React, { Component } from "react";
import RetroBoardCategory from "../RetroBoardCategory/RetroBoardCategory";

class RetroBoard extends Component {
  static defaultProps = {
    categories: {
      1: "Went Well",
      2: "To Improve",
      3: "Action Items"
    }
  };
  state = {
    lastId: 0,
    retros: [],
    layout: "row"
  };
  new = category => {
    const newId = this.state.lastId + 1;
    this.setState({
      lastId: newId,
      retros: [
        ...this.state.retros,
        {
          id: newId,
          text: "",
          category
        }
      ]
    });
  };
  insert = (id, text) => {
    this.setState({
      retros: this.state.retros.map(retro => {
        if (retro.id === id) retro.text = text;
        return retro;
      })
    });
  };
  move = (id, directionNum) => {
    this.setState({
      retros: this.state.retros.map(retro => {
        if (retro.id === id) {
          const numOfCategories = Object.values(this.props.categories).length;
          let newCategoryIndex = retro.category + directionNum;
          retro.category =
            newCategoryIndex > numOfCategories
              ? 1
              : newCategoryIndex || numOfCategories;
        }
        return retro;
      })
    });
  };
  delete = id => {
    this.setState({
      retros: this.state.retros.filter(retro => retro.id !== id)
    });
  };
  toggleLayout = () => {
    this.setState({
      layout: this.state.layout === "row" ? "column" : "row"
    });
  };
  render() {
    return (
      <main className={`content ${this.state.layout}`}>
        <h1>Retro Board</h1>
        <div>
          Layout &nbsp;
          <button className="button button-default" onClick={this.toggleLayout}>
            {this.state.layout === "row" ? "Column" : "Row"}
          </button>
        </div>
        <div className={`RetroBoard ${this.state.layout}`}>
          {Object.entries(this.props.categories).map(arr => {
            const category = parseInt(arr[0]);
            const title = arr[1];
            const key = "category-" + category;
            const retros = this.state.retros.filter(retro => {
              return retro.category === category;
            });
            return (
              <RetroBoardCategory
                new={this.new}
                insert={this.insert}
                move={this.move}
                delete={this.delete}
                category={category}
                title={title}
                retros={retros}
                key={key}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default RetroBoard;
