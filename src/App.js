import { hot } from 'react-hot-loader';
import * as React from 'react';
import Home from './view/Home';

import './styles/theme.sass';
import Header from './components/Header';
import Counter from './components/Counter';


const HEADER_ITEMS = [
  { name: 'Home' },
  { name: 'Search' },
  { name: 'Contact' },
];

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <Header items={HEADER_ITEMS} />
        <Home username="DaftCoder" />
        <Counter />
      </main>
    );
  }
}

export default hot(module)(App);
