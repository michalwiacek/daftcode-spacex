import * as React from 'react';
import PropTypes from 'prop-types';
import './Counter.sass';


function formatSec(secs) {
  const isTrue = (typeof secs === 'number') && (secs >= 0);

  if (!isTrue) {
    throw new Error('Invalid format');
  }
  let result;
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

  result = `${minutesStr} : ${secondsStr}`;

  return result;
}


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: 66,
      to: 59,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.state.from !== this.state.to) {
        this.setState({
          from: this.state.from - 1,
        });
      } else {
        this.setState({
          from: this.state.to,
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleTimer() {
    this.setState({
      from: 66,
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Odliczam pozostały czas do {this.state.to}</h1>
        <button className="counter" onClick={this.toggleTimer}>{formatSec(this.state.from)} </button>
      </div>
    );
  }
}
export default Counter;
