import * as React from "react"
import PropTypes from "prop-types";
import {format, toUpper} from 'date-fns';
import { en } from 'date-fns/locale/en'

class MissionLaunchPad extends React.Component {
  constructor() {
    super();
    this.state = {
      details: null
    }
  }
  
  render() {

    const { full_name, location, details } = this.props.launchSite

    return (
      <div className="MissionDetail">
      <h2 className="MissionDetail__title">Launch Pad</h2>
      <hr className="MissionDetail__hr"/>
      <div className="MissionDetail__block-wrapper">
      <blockquote className="MissionDetail__block">
        <div className="MissionDetail__list">
          <div className="MissionDetail__item"><span className="MissionDetail__key">name: </span><span className="MissionDetail__val">{full_name}</span></div>
        </div>
      </blockquote>
      <blockquote className="MissionDetail__block">
        <div className="MissionDetail__list">
          <div className="MissionDetail__item"><span className="MissionDetail__key">location: </span><span className="MissionDetail__val">{location.name}, {location.region}</span></div>
        </div>
      </blockquote>
      </div>
      <p className="MissionDetail__feed">{details}</p>
      </div>
    );
  }
}

export default MissionLaunchPad