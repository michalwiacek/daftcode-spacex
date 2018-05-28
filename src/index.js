import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';
import App from './App';
import MainStore from './stores/MainStore';

const Root = (
  <Provider MainStore={MainStore}>
    <App />
  </Provider>
);
ReactDOM.render(Root, document.getElementById('root'));
