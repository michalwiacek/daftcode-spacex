import * as React from 'react';
import { format, toUpper } from 'date-fns';
import { en } from 'date-fns/locale/en';
import axios from 'axios';
import { Provider, observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

import { CircleLoader } from 'react-spinners';
import FilterButtons from '../components/FilterButtons';
import LaunchItem from '../components/LaunchItem';

@inject('MainStore')
@observer
class LaunchesList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { launchesData, state, error } = this.props.MainStore;
    return (
      <div className="LaunchesList">
        <div className="LaunchesList__header">
          <div className="LaunchesList__header-wrapper">
            <span className="LaunchesList__title" />
            <h2 className="LaunchesList__subtitle">launches</h2>
          </div>
        </div>
        <FilterButtons />
        {error ? (
          <div className="error">
            <h1 className="error__text">Sorry, no launches found</h1>
          </div>
        ) : (
          <div className="LaunchesList__wrapper">
            <div className="loading">
              <CircleLoader className="circle"
                color={'#ccac5b'}
                loading={state === "pending" ? true : false}
                size={100}
                />
            </div>
            <ol className="LaunchesList__list">
              {launchesData.map((launch, index) =>
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
