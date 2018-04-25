import * as React from "react"
import MissionLinks from "../components/MissionLinks";
import MissionDetail from "../components/MissionDetail";


class LaunchDetails extends React.Component {
  render() {
    return (
      <div>
        <h1>Launch Details 2018</h1>
        <MissionDetail />
        <MissionDetail />
        <MissionDetail />
        <MissionLinks />
      </div>
    );
  }
}

export default LaunchDetails