import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Clock from './Clock';
// import PlaceHolder from './PlaceHolder';
import AxiosTest from './AxiosTest';

import * as serviceWorker from './serviceWorker';
import Axios from 'axios';

import {BrowserRouter} from 'react-router-dom';

// Set the axios Global config
Axios.defaults.baseURL= 'https://jsonplaceholder.typicode.com';
Axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
Axios.defaults.headers.post['Content-Type']='application/json';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Clock/>
    
    <BrowserRouter>
    {/* <PlaceHolder/> */}
    <AxiosTest/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
