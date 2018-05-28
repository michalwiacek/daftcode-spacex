import * as React from "react";

import { format, toUpper } from 'date-fns';
import { en } from 'date-fns/locale/en';
import { inject, observer } from "mobx-react";

import MissionLinks from "../components/MissionLinks";
import MissionDetail from "../components/MissionDetail";
import MissionRocket from "../components/MissionRocket";
import MissionLaunchPad from "../components/MissionLaunchPad";
import MissionCounter from "../components/MissionCounter";
import { action } from "mobx";

@inject('MainStore')
@observer
class LaunchDetails extends React.Component {
  
  @action.bound
  handleClick(){
    const {MainStore} = this.props;
    MainStore.handleBackClick();
  }
  render() {
    const {
      links,
      launch_date_local,
      launch_date_unix,
      launch_site,
      details,
    } = this.props.MainStore.missionData;
    const { rocketData } = this.props.MainStore;
    const date = format(launch_date_local, 'DD MMMM YYYY', { locale: en });
    const date_of_start = launch_date_unix;

    return (
      <div className="LaunchDetails">
        <div className="LaunchDetails__header">
          <header className="Header">
            <button className="Header__go-back-button" onClick={this.handleClick()}><div className="arrow"></div>GO BACK</button>
            <span className="Header__logo"></span>
            <div className="Header__side"></div>
          </header>
        </div>
        <div className="LaunchDetails__main-container">
          <div className="LaunchDetails__counter">

            <div className="MissionCounter">
              <p className="MissionCounter__date">{date}</p>
              <h1 className="MissionCounter__name">{launch_site.site_name}</h1>
              <MissionCounter to={date_of_start} today={Math.floor(new Date().getTime() / 1000)} />
              <img className="MissionCounter__patch" src={links.mission_patch_small} />
            </div>
          </div>
          <div className="LaunchDetails__details">
            <MissionDetail details={details} />
            <MissionRocket rocket={rocketData.rocket} />
            <MissionLaunchPad launchSite={this.props.launchSite} />
          </div>
        </div>
        <MissionLinks 
        reddit_campaign={links.reddit_campaign} 
        presskit={links.presskit}
        video_link={links.video_link}
        />
      </div>
    );
  }
}

export default LaunchDetails;
