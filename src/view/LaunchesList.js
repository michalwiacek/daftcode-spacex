import * as React from 'react';
import { format, toUpper } from 'date-fns';
import { en } from 'date-fns/locale/en';
import FilterButtons from '../components/FilterButtons';
import _ from 'lodash'

class LaunchesList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state={
      launches: undefined,
    };
  }

  get availableRocketNames() {
    const { launches } = this.props;

    const rocketNames = _.uniqWith(_.map(this.props.launches, 'rocket.rocket_name'), _.isEqual);


    // get all names from launches
    return rocketNames;
  }

  get filteredLaunches() {
    const { rocketNameFilter } = this.state;
    const { launches } = this.props;

    if (!rocketNameFilter) return launches;

    return launches.filter(launch => launch.rocket.rocket_name === rocketNameFilter);
  }

  handleFilterChange(value) {
    this.setState({ rocketNameFilter: value });
  }

  render() {
    return (
      <div className="LaunchesList">
        <div className="LaunchesList__header">
          <div className="LaunchesList__header-wrapper">
            <div className="LaunchesList__title"></div>
            <h2 className="LaunchesList__subtitle">launches 2018</h2>
          </div>
        </div>
        <FilterButtons
          options={this.availableRocketNames}
          onChange={this.handleFilterChange}
        />
      
        <div className="temp"></div>
        { /* render list */ }
      </div>
    );
  }
}
export default LaunchesList;
