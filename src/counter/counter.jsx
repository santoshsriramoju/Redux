import "./counter.css";
import React from "react";

function template() {
  return (
    <div className="counter">
      <h1>I'm a counter</h1>
      <p>Count: {this.props.count.count}</p>
      <p>{this.props.count.data}</p>
      <button onClick={this.props.onIncrementClick}>increment</button>
    </div>
  );
};

export default template;
