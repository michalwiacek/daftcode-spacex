import * as React from 'react';
import axios from 'axios';
import { CircleLoader } from 'react-spinners';
import FilterButtons from '../components/FilterButtons';
import LaunchItem from '../components/LaunchItem';

class LaunchesList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      launches: [],
      isLoading: false,
      error: false,
      rocketNameFilter: '',
      rocketNames: ['Falcon 1', 'Falcon 9', 'Falcon 10', 'Falcon Heavy'],
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  componentWillMount() {
    this.fetchFilteredLaunches();
  }
  async fetchFilteredLaunches(value) {
    this.setState({ isLoading: true, error: false });
    let filter = `?rocket_name=${value}`;
    if (!value) filter = '';
    const axiosInstnce = axios.create({
      baseURL: 'https://api.spacexdata.com/v2',
    });
    try {
      const response = await axiosInstnce.get(`/launches${filter}`);
      if (response.data.length === 0) this.setState({ error: true });
      this.setState({ launches: response.data, isLoading: false });
    } catch (e) {
      this.setState({ error: true }); // 💩
    }
  }

  handleFilterChange(value) {
    this.fetchFilteredLaunches(value);
  }

  render() {
    const {rocketNameFilter, isLoading, launches, error} = this.state;

    return (
      <div className="LaunchesList">
        <div className="LaunchesList__header">
          <div className="LaunchesList__header-wrapper">
            <span className="LaunchesList__title" />
            <h2 className="LaunchesList__subtitle">launches</h2>
          </div>
        </div>
        <FilterButtons
          options={this.state.rocketNames}
          onChange={this.handleFilterChange}
        />
        {error ? (
          <div className="error">
            <h1 className="error__text">Sorry, no launches found</h1>
          </div>
        ) : (
          <div className="LaunchesList__wrapper">
            <div className="loading">
              <CircleLoader className="circle"
                color={'#ccac5b'}
                loading={isLoading}
                size={100}
                />
            </div>
            <ol className="LaunchesList__list">
              {launches.map((launch, index) =>
                <LaunchItem
                  launch={launch}
                  key={launch.flight_number}
                  id={index}
                  onLaunchClick={this.props.onLaunchClick} />)
              }
            </ol>
          </div> 
          )
        }
      </div>
    );
  }
}
export default LaunchesList;
