import * as React from 'react';

import './styles/theme.sass';
import Footer from './components/Footer';

import launch from './assets/sample_json_data/launch.json';
import launchSite from './assets/sample_json_data/launch_site.json';
import rocket from './assets/sample_json_data/rocket.json';
import LaunchDetails from './view/LaunchDetails';

import LaunchesList from './view/LaunchesList';


class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      viewName: 'list',
    };

    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  get activeViewComponent() {
    const { viewName } = this.state;

    switch (viewName) {
      case 'list':
        return (
          <LaunchesList
            //launches={launches}
            onLaunchClick={this.handleLaunchClick}
          />
        );

      case 'details':
        window.scrollTo(0, 0);
        return (
          <LaunchDetails
            launch={launch}
            launchSite={launchSite}
            rocket={rocket}
            onBackClick={this.handleBackClick}
          />
        );

      default: return null;
    }
  }

  handleLaunchClick() {
    this.setState({ viewName: 'details' });
  }

  handleBackClick() {
    this.setState({ viewName: 'list' });
  }


  render() {
    return (
      <main>
        {this.activeViewComponent}
        <Footer />
      </main>
    );
  }
}

export default App;
