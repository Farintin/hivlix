import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import './css/size.css'
import './css/index.css'
import './css/icon.css'

import App from './App'



ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root'))