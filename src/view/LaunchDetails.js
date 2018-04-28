import * as React from "react"
import MissionLinks from "../components/MissionLinks";
import MissionDetail from "../components/MissionDetail";

class LaunchDetails extends React.Component {
  


  render() {
    const { launch } = this.props;
    return (
      <div>
        <h1>Launch Details 2018</h1>
        <MissionDetail launch={launch}/>
        <MissionDetail />
        <MissionDetail />
        <MissionLinks />
      </div>
    );
  }
}

export default LaunchDetails