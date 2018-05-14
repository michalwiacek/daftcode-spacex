import * as React from 'react';
import { format, toUpper } from 'date-fns';
import { en } from 'date-fns/locale/en';
import _ from 'lodash';
import FilterButtons from '../components/FilterButtons';
import LaunchItem from '../components/LaunchItem';

class LaunchesList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      rocketNameFilter: "",
      launches: props.launches,
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  get availableRocketNames() {
    const { launches } = this.props;

    const rocketNames = _.uniqWith(_.map(this.props.launches, 'rocket.rocket_name'), _.isEqual);

    return rocketNames;
  }

  get filteredLaunches() {
    const { rocketNameFilter } = this.state;
    const { launches } = this.props;

    if (!rocketNameFilter) return launches;

    return launches.filter(launch => launch.rocket.rocket_name === rocketNameFilter);
  }

  handleFilterChange(value) {
    console.log(value);
    console.log("click click");
    this.setState({ rocketNameFilter: value });
  }

  render() {
    const { launches } = this.props;
    const { rocketNameFilter } = this.state;
    return (
      <div className="LaunchesList">
        <div className="LaunchesList__header">
          <div className="LaunchesList__header-wrapper">
            <span className="LaunchesList__title" />
            <h2 className="LaunchesList__subtitle">launches</h2>
          </div>
        </div>
        <FilterButtons
          options={this.availableRocketNames}
          onChange={this.handleFilterChange}
        />
        <div className="LaunchesList__wrapper">
          <ol className="LaunchesList__list">
            {this.filteredLaunches.map((launch, index) =>
              <LaunchItem 
                launch={launch}
                key={launch.flight_number}
                id={index}
                onLaunchClick={this.props.onLaunchClick} />)
            }
          </ol>
        </div>
        { /* render list */ }
      </div>
    );
  }
}
export default LaunchesList;
