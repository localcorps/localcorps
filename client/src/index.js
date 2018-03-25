import React from 'react';
import { render } from 'react-dom';
import './index.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore()
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(
	<Provider store={store}	
		<App />
	</Provider>,
	document.getElementById('root'));
	
registerServiceWorker();


