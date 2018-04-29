import * as React from "react"
import MissionLinks from "../components/MissionLinks";
import MissionDetail from "../components/MissionDetail";
import MissionRocket from "../components/MissionRocket";
import MissionLaunchPad from "../components/MissionLaunchPad";
import MissionCounter from "../components/MissionCounter";
import {format, toUpper} from 'date-fns';
import { en } from 'date-fns/locale/en'

//import launch from "../components/launch";

class LaunchDetails extends React.Component {
  constructor(){
    super();
    this.state={
      launch: null
    }
  }

  render() {
    const date = format(this.props.launch.launch_date_local, 'DD MMMM YYYY', {locale: en})
    const date_of_start = this.props.launch.launch_date_unix

    return (
      <div className="LaunchDetails">
        <div className="LaunchDetails__main-container">
          <div className="LaunchDetails__counter">
          
            <div className="MissionCounter">
              <p className="MissionCounter__date">{date}</p>
              <h1 className="MissionCounter__name">{this.props.launch.launch_site.site_name}</h1>
              <MissionCounter to={date_of_start} today={Math.floor(new Date().getTime()/1000)} />
              <img className="MissionCounter__patch" src={this.props.launch.links.mission_patch_small} />
            </div>
          </div>
          <div className="LaunchDetails__details">
            <MissionDetail details={this.props.launch.details}/>
            <MissionRocket rocket={this.props.rocket}/>
            <MissionLaunchPad launchSite={this.props.launchSite}/>
          </div>
        </div>
        <MissionLinks 
        reddit_campaign={this.props.launch.links.reddit_campaign} 
        presskit={this.props.launch.links.presskit}
        video_link={this.props.launch.links.video_link}
        />
      </div>
    );
  }
}

export default LaunchDetails