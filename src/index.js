import React from 'react'
import ReactDOM from 'react-dom';
import './styles/globals.css';
import App from './containers/App';

//Redux
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
