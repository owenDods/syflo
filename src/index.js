import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import AppContainer from './app/AppContainer';
import reducers from './app/reducers';

import './styles/index.scss';

const store = createStore(reducers);

render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
);
