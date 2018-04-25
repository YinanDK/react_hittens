/*eslint-disable import/default */

import 'babel-polyfill';
import React from 'react';
import {render } from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

import {loadCards} from './actions/CardsActions';
import {loadWeather} from './actions/WeatherAction';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

import './style/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';



const store = configureStore();
store.dispatch(loadCards());
store.dispatch(loadWeather());


render(
  <Provider store={store}>
    <Router history ={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')

);
