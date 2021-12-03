import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/mapbox-gl/dist/mapbox-gl.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
