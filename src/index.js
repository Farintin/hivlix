import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import './style/size.css'
import './style/index.css'
import './style/icon.css'

import App from './App'



ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root'))