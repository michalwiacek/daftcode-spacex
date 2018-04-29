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
import formatDistanceStrict from "date-fns/formatDistanceStrict"
import { formatDistance } from "date-fns/esm/fp";

/**
 * Util function to display diff time in seconds between two parameters
 */
function getTimeDiff({ to }) {
  const today = new Date()
  return Math.abs(to - today)
}

class MissionCounter extends React.PureComponent {

  constructor(){
    super();
      this.state={
        date: null
      }
  }
  
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
    

    return <p>{format(date, "mm:ss")}</p>
  }
  
  render()
    
    {
      return (
        <div>
          <p>{formatDistance(to, today)}</p>
          <span onClick={this.togglePlay}>{this.renderTimeLabel()}</span>
        </div>
    );
  }
}

MissionCounter.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  onSuccess: PropTypes.func,
}

export default MissionCounter