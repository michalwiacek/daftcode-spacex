import React, { Component } from "react"
import { format } from "date-fns/esm"
import { enUS } from "date-fns/esm/locale"
import { parseISO } from "date-fns"

class LaunchItem extends Component {
  constructor() {
    super()
  }

  render() {
    const { launch } = this.props
    const { key } = this.props
    const date = format(
      parseISO(this.props.launch.launch_date_local),
      "dd MMMM yyyy",
      { locale: enUS }
    )
    const directionClass = this.props.id % 2 ? "direction-l" : "direction-r"
    const childDirectionClass = this.props.id % 2 ? "-l" : "-r"
    return (
      <li
        className={"LaunchItem " + directionClass}
        onClick={this.props.onLaunchClick}
      >
        <div className={"LaunchItem__date" + childDirectionClass}>{date}</div>
        <div className={"LaunchItem__divider" + childDirectionClass}>
          <span className={"dot" + childDirectionClass}></span>
          <hr className={"LaunchItem__hr" + childDirectionClass} />
        </div>
        <div className={"LaunchItem__details" + childDirectionClass}>
          <span className="LaunchItem__key">ROCKET: </span>
          <span className="LaunchItem__val"> {launch.rocket.rocket_name}</span>
          <span className="spacer">| </span>
          <span className="LaunchItem__key">Launch Site: </span>
          <span className="LaunchItem__val">
            {launch.launch_site.site_name_long}
          </span>
        </div>
      </li>
    )
  }
}
export default LaunchItem
