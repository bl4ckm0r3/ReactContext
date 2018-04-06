import React, { Component } from "react";
import "./App.css";
import { Child } from './Child';

const NameContext = React.createContext();
const NameProvider = NameContext.Provider;
export const NameConsumer = NameContext.Consumer;

const names = ["Marco", "Mary"];

export class Context extends Component {
  state = {
    name: names[0],
    idx: 0,
    changeName: () => this.changeName(...arguments)
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
      <NameProvider value={this.state}>
        <div className="context">
          <Child />
        </div>
      </NameProvider>
    );
  }
}


