/**
 * Counter
 * Component used to displaying time in format mm:ss
 *
 * sample use:
 * <Counter from={4} to={1} onSuccess={() => alert("success!")}/>
 * */

import * as React from "react"
import PropTypes from "prop-types"

/**
 * Util function to display diff time in seconds between two parameters
 */
function getTimeDiff({ to, today }) {
      return (to - today)
}

class MissionCounter extends React.PureComponent {
  counterInterval
  
  state = {
    secondsLeft: getTimeDiff(this.props),
    isOff: false,
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
    
    const date = new Date(0)
    date.setSeconds(secondsLeft)
    const sec = Math.floor(date /1000) % 60;
    const min = Math.floor(date/(1000*60)) % 60;
    const hrs = Math.floor(date/(1000*60*60)) % 24;
    const days = Math.floor(date/(1000*60*60*24)) % 24;
    if (date > 0) {
    return <span className="MissionCounter__counter">{days} DAYS {hrs} HRS {min} MINS {sec} SEC TO START</span>
    /*<span className="MissionCounter__counter">{format(date, "D [DAYS] H [HRS] mm [MINS] ss")} SEC TO START</span>
    <span className="MissionCounter__counter">{format(date, "M [MTHS] D [DAYS] H [HRS] m [MINS] ss")} SEC TO START</span>
    */
    } else { 
      return <span className="MissionCounter__counter">{Math.abs(days)} DAYS {Math.abs(hrs)} HRS {Math.abs(min)} MINS {Math.abs(sec)} SEC SINCE START</span>}
  }
  
  render()
    
    {
      return (
        <span>{this.renderTimeLabel()}</span>
    );
  }
}

MissionCounter.propTypes = {
  today: PropTypes.number,
  to: PropTypes.number,
  onSuccess: PropTypes.func,
}

export default MissionCounter
