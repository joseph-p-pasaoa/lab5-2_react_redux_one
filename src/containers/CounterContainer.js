import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import {
  incrementCount,
  decrementCount,
  incrementCountEven,
  incrementCountOdd,
  incrementCountAsync
} from "../actions/counterActions";

class CounterContainer extends React.Component {
  increment = () => {
    const { dispatch } = this.props;
    dispatch(incrementCount());
  };

  decrement = () => {
    const { dispatch } = this.props;
    dispatch(decrementCount());
  };

  incrementEven = () => {
    const { dispatch } = this.props;
    dispatch(incrementCountEven());
  };

  incrementOdd = () => {
    const { dispatch } = this.props;
    dispatch(incrementCountOdd());
  };

  incrementAsync = () => {
    const { dispatch } = this.props;
    dispatch(incrementCountAsync());
  };

  render() {
    const { count } = this.props;
    console.log(this.props);

    return (
      <Counter
        value={count}
        onIncrement={this.increment}
        onDecrement={this.decrement}
        onIncrementEven={this.incrementEven}
        onIncrementOdd={this.incrementOdd}
        onIncrementAsync={this.incrementAsync}
      />
    );
  }
}

// The component is connected to the redux store
export default connect(state => state)(CounterContainer);