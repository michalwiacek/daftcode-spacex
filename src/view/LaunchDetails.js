import * as React from "react"
import MissionLinks from "../components/MissionLinks";
import MissionDetail from "../components/MissionDetail";
import MissionRocket from "../components/MissionRocket";
import MissionLaunchPad from "../components/MissionLaunchPad";
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
    

    return (
      <div>
        <p>{date}</p>
        <h1>{this.props.launch.launch_site.site_name_long}</h1>
        <img src={this.props.launch.links.mission_patch_small} />
        <MissionDetail details={this.props.launch.details}/>
        <MissionRocket rocket={this.props.rocket}/>
        <MissionLaunchPad launchSite={this.props.launchSite}/>
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