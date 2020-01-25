import React from 'react';

import './App.css';
import './fonts/fonts.css';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import { BrowserRouter } from 'react-router-dom';

import useWindowSize from './hooks/useWindowSize';

import Main from './components/Main';

// Configure Amplify
Amplify.configure(awsconfig);

const App = () => {

	// App states
	const device = useWindowSize().width > 992 ? "desktop" : "mobile"

	return (
		<BrowserRouter>
			<Main device={device} />
		</BrowserRouter>
	);
}

export default App;
