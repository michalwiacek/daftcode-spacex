import { hot } from 'react-hot-loader';
import * as React from 'react';

import './styles/theme.sass';

import launch from './assets/sample_json_data/launch.json';
import launchSite from './assets/sample_json_data/launch_site.json';
import rocket from './assets/sample_json_data/rocket.json';
import Footer from 'components/Footer';
import LaunchDetails from 'view/LaunchDetails';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props){
    super(props);
    this.state = {
      contacts: []
    }
  }

  render() {
    return (
      <main>
        <LaunchDetails
        launch={launch}
        //launchSite={launchSite}
        //rocket={rocket}
        />
        <Footer/>
      </main>
    );
  }
}

export default hot(module)(App);
