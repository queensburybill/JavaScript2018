import React, { Component } from "react";

class Retro extends Component {
  /**
   * Creating a growable textarea with refs
   * @see https://codepen.io/vsync/pen/czgrf
   */
  textArea = null;
  setTextArea = textArea => (this.textArea = textArea);

  render() {
    const idForLabel = "retro-label-" + this.props.id;
    return (
      <div className="Retro">
        <label className="sr-only" htmlFor={idForLabel}>
          Enter retro text
        </label>
        <textarea
          id={idForLabel}
          className="textbox"
          placeholder="Enter text here"
          rows="1"
          value={this.props.text}
          onChange={e => this.props.insert(this.props.id, e.target.value)}
          ref={this.setTextArea}
          style={
            this.textArea
              ? { minHeight: this.textArea.scrollHeight + "px" }
              : null
          }
        />
        <div className="ButtonGroup">
          <button
            type="button"
            className="button button-left"
            onClick={() => this.props.move(this.props.id, -1)}
          >
            <span className="sr-only">Move Left</span>
            &lt;
          </button>
          <button
            type="button"
            className="button button-delete"
            onClick={() => this.props.delete(this.props.id)}
          >
            <span className="sr-only">Delete</span>
            &times;
          </button>
          <button
            type="button"
            className="button button-right"
            onClick={() => this.props.move(this.props.id, 1)}
          >
            <span className="sr-only">Move Right</span>
            &gt;
          </button>
        </div>
      </div>
    );
  }
}

export default Retro;
