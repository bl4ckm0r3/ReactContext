import React, { Component } from "react";
import { NameConsumer } from './Context';

class InnerChild extends Component {
  render() {
    return (
      <NameConsumer>
        {({ name, changeName }) => (
          <div className="inner-child" onClick={changeName}>
            Hello {name}
          </div>
        )}
      </NameConsumer>
    );
  }
}

export class Child extends Component {
  render() {
    return (
      <div className="child">
        <span role="img" aria-label="spy">
          🕵
        </span>
        {this.props.name}
        <InnerChild />
      </div>
    );
  }
}