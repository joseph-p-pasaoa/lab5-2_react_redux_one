import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import {
  incrementCount,
  decrementCount
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
    if (this.props.count % 2 === 0) {
      const { dispatch } = this.props;
      dispatch(incrementCount());
    }
  };

  incrementOdd = () => {
    if (this.props.count % 2 === 1) {
      const { dispatch } = this.props;
      dispatch(incrementCount());
    }
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
      />
    );
  }
}

// The component is connected to the redux store
export default connect(state => state)(CounterContainer);
