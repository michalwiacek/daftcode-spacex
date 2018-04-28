import * as React from "react"
import PropTypes from "prop-types";
//import '../styles/MissionDetail.sass';

class MissionDetail extends React.Component {


  render() {
    const { launch } = this.props;

    return (
      <div className="MissionDetail">
      <h2 className="MissionDetail__title">Details</h2>
      <hr className="MissionDetail__hr"/>
      <p className="MissionDetail__feed">Part of the Explorers program, this space telescope is intended for wide-field search of exoplanets transiting nearby stars. It is the first NASA high priority science mission launched by SpaceX. It was the first time SpaceX launched a scientific satellite not primarily intended for Earth observations. The second stage placed it into a high-Earth elliptical orbit, after which the satellite's own booster will perform complex maneuvers including a lunar flyby, and over the course of two months, reach a stable, 2:1 resonant orbit with the Moon. In January 2018, SpaceX received NASA's Launch Services Program Category 2 certification of its Falcon 9 'Full Thrust', certification which is required for launching medium risk missions like TESS. It was the last launch of a new Block 4 booster, and marked the 24th successful recovery of the booster. An experimental water landing was performed in order to attempt fairing recovery.</p>
      </div>
    );
  }
}

export default MissionDetail