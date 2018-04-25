/**
 * Counter
 * Component used to displaying time in format mm:ss
 *
 * sample use:
 * <Counter from={4} to={1} onSuccess={() => alert("success!")}/>
 * */

import * as React from "react"
import PropTypes from "prop-types"
import format from "date-fns/format"

/**
 * Util function to display diff time in seconds between two parameters
 */
function getTimeDiff({ to, from }) {
  return Math.abs(to - from)
}

class Counter extends React.PureComponent {
  counterInterval

  state = {
    secondsLeft: getTimeDiff(this.props),
    active: false,
  }

  componentDidMount() {
    this.togglePlay()
  }

  componentDidUpdate() {
    this.validateSuccess();
  }

  /**
   * Run onSuccess callback if defined after counter is finished
   */
  validateSuccess = () => {
    const { secondsLeft } = this.state
    const { onSuccess } = this.props
    if (secondsLeft === 0 && onSuccess) {
      onSuccess()
    }
  }

  /**
   * Run counter
   */
  start = () => {
    this.counterInterval = setInterval(this.tick, 1000) //1000ms -> 1sec
  }

  tick = () => {
    const { secondsLeft } = this.state
    const newState = {
      secondsLeft: secondsLeft - 1,
    }

    if (newState.secondsLeft === 0) {
      newState.active = false
      this.stop()
    }
    this.setState(newState)
  }

  /**
   * Clear timer used by counter
   */
  stop = () => {
    clearInterval(this.counterInterval)
  }

  /**
   * Pause or play depending on active status
   */
  togglePlay = () => {
    const { active, secondsLeft } = this.state
    if(secondsLeft !== 0){
      this.setState({ active: !active })
      if (active) {
        this.stop()
      } else {
        this.start()
      }
    }
  }

  /**
   * Render formatted remaining time within button
   */
  renderTimeLabel = () => {
    const { active, secondsLeft } = this.state

    const inlineStyle = {
      fontSize: "2rem",
      background: active ? "green" : "red",
      borderRadius: "0.5rem",
      padding: 10,
    }

    const date = new Date(0)
    date.setSeconds(secondsLeft)

    return <button style={inlineStyle}>{format(date, "mm:ss")}</button>
  }

  render() {
    return <span onClick={this.togglePlay}>{this.renderTimeLabel()}</span>
  }
}

Counter.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  onSuccess: PropTypes.func,
}

export default Counter