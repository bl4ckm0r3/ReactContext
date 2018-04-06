import React, { Component } from "react";
import "./App.css";

class InnerChild extends Component {
  static defaultProps = {
    changeName: () => console.log("default changeName")
  };

  render() {
    return (
      <div className="inner-child" onClick={this.props.changeName}>
        Hello {this.props.name}
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <div className="child">
        <span role="img" aria-label="spy">
          🕵
        </span>
        {this.props.name}
        <InnerChild name={this.props.name} changeName={this.props.changeName} />
      </div>
    );
  }
}

const names = ["Marco", "Mary"];

class Cascade extends Component {
  state = {
    name: names[0],
    idx: 0
  };

  changeName = () => {
    const idx = (this.state.idx + 1) % names.length;

    this.setState({
      name: names[idx],
      idx
    });
  };

  render() {
    return (
      <div className="cascade">
        <Child name={this.state.name} changeName={this.changeName} />
      </div>
    );
  }
}

export default Cascade;
