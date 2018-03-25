import React from 'react';
import { render } from 'react-dom';
import './index.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'

import registerServiceWorker from './registerServiceWorker'


render(
	<App />,
	document.getElementById('root'));
	
registerServiceWorker();


