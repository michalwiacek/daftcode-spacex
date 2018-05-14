import React, { Component } from 'react';
import { format, toUpper } from 'date-fns';
import { en } from 'date-fns/locale/en';
import arrow from '../assets/img/arrow_pointer.svg';

class LaunchItem extends Component {
  constructor(){
    super()
  }

  render() {
    const { launch } = this.props;
    const date = format(this.props.launch.launch_date_local, 'DD MMMM YYYY', {locale: en})
    const directionClass = this.props.launch.flight_number%2 ? 'direction-r' : 'direction-l'
    const childDirectionClass = this.props.launch.flight_number%2 ? '-r' : '-l'
    return (
      <li className={"LaunchItem " + directionClass} onClick={this.props.onLaunchClick} >
        <div className={"LaunchItem__date" + childDirectionClass}>{date}</div>
        <div className={"LaunchItem__divider" + childDirectionClass}><span className={"dot" + childDirectionClass}></span><hr className={"LaunchItem__hr" + childDirectionClass} /></div>
        <div className={"LaunchItem__details" + childDirectionClass}>
          <span className="LaunchItem__key">ROCKET: </span><span className="LaunchItem__val"> {launch.rocket.rocket_name}</span>
          <span className="spacer">| </span>
          <span className="LaunchItem__key">Launch Site: </span><span className="LaunchItem__val">{launch.launch_site.site_name_long}</span>
        </div>
      </li>
    );
  }
}
export default LaunchItem;
