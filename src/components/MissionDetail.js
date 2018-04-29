import * as React from "react"
import PropTypes from "prop-types";

class MissionDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      details: null
    }
  }
  
  render() {

    return (
      <div className="MissionDetail">
      <h2 className="MissionDetail__title">Details</h2>
      <hr className="MissionDetail__hr"/>
      <p className="MissionDetail__feed">{this.props.details}</p>
      </div>
    );
  }
}

export default MissionDetail