import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as Sentry from '@sentry/browser';

Sentry.init({dsn: "https://c4de7c3e95474ecb9ee1c1ce651ffa25@sentry.io/1853932", release: "ebAWS@2.0.0"});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
