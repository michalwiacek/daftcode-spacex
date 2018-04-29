import * as React from "react"
//import '../styles/MissionLinks.sass';
import Button from './Button';

class MissionLinks extends React.PureComponent {

  render() {
    return (
      <div className="MissionLinks">
        <div className="MissionLinks__wraper">
          <h2 className="MissionLinks__title">MISSION LINKS</h2>
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