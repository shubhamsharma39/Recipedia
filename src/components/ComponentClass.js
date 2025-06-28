import { Component } from "react";

class ComponentClass extends Component {
  constructor(props) {
    super(props);

    // ✅ Only the state we actually use
    this.state = {
      count: 0,
      count1: 1,
    };
  }

  increase = () => {
    // method ko class field banaya so we don't recreate on each render
    this.setState((prev) => ({
      count: prev.count + 1,
      count1: prev.count1 + 1,
    }));
  };

  render() {
    const { name, Age } = this.props;
    const { count, count1 } = this.state; // ✅ no unused vars

    return (
      <>
        <h1>{count}</h1>
        <h1>{count1}</h1>
        <button onClick={this.increase}>Count Increase</button>

        <h1>{name}</h1>
        <h2>{Age}</h2>
      </>
    );
  }
}

export default ComponentClass;

/*
Class-based Components are made up of three different methods:
  1. constructor()          – receive props, declare state
  2. componentDidMount()    – API calls
  3. render()               – returns JSX

Lifecycle:
  1. Parent constructor()
  2. Parent render()
  3. Child constructor()
  4. Child render()
  5. Child componentDidMount()
  6. Parent componentDidMount()

With multiple children, render methods batch, then componentDidMount methods batch.
*/
