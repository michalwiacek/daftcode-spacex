import { hot } from 'react-hot-loader';
import * as React from 'react';
import { Provider, observer, inject } from 'mobx-react';

import './styles/theme.sass';
import Footer from './components/Footer';

import launch from './assets/sample_json_data/launch.json';
import launchSite from './assets/sample_json_data/launch_site.json';
import rocket from './assets/sample_json_data/rocket.json';
import LaunchDetails from './view/LaunchDetails';

//import launches from './assets/sample_json_data/launches.json';
import LaunchesList from './view/LaunchesList';


@inject('MainStore')
@observer
class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { MainStore } = this.props;
    return (
      <main>
        {MainStore.view}
        <Footer />
      </main>
    );
  }
}

export default hot(module)(App);
