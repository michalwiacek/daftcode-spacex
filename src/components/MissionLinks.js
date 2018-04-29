import * as React from "react"
//import '../styles/MissionLinks.sass';
import Button from './Button';

class MissionLinks extends React.PureComponent {

  render() {
    return (
      <div className="mission-links">
        <div className="mission-links-wraper">
          <span className="header_sml title">MISSION LINKS</span>
          <div className="buttons-wraper">
            <Button link={this.props.reddit_campaign} buttonText="REDDIT CAMPAIGN"/>
            <Button link={this.props.presskit} buttonText="PRESSKIT"/>
            <Button link={this.props.video_link} buttonText="MISSION VIDEO"/>
          </div>
        </div>
      </div>
      );
  }
}

export default MissionLinks