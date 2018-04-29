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
        <ul>
      <li><p className="MissionDetail_key">name:</p><p className="MissionDetail_val">{full_name}</p></li>
        </ul>
        <ul>
      <li><p className="MissionDetail_key">location:</p><p className="MissionDetail_val">{location.name},{location.region}</p></li>
        </ul>
      <p className="MissionDetail__feed">{details}</p>
      </div>
    );
  }
}

export default MissionLaunchPad