import * as React from "react"
//import '../styles/MissionLinks.sass';
import Button from './Button';

class MissionLinks extends React.Component {

  render() {
    return (
      <div className="mission-links">
        <div className="mission-links-wraper">
          <span className="header_sml title">MISSION LINKS</span>
          <div className="buttons-wraper">
            <Button buttonText="REDDIT CAMPAIGN"/>
            <Button buttonText="PRESSKIT"/>
            <Button buttonText="MISSION VIDEO"/>
          </div>
        </div>
      </div>
      );
  }
}

export default MissionLinks