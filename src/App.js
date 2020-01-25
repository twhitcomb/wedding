import React from 'react';

import './App.css';
import './fonts/fonts.css';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main';

// Configure Amplify
Amplify.configure(awsconfig);

const App = () => {

	return (
		<BrowserRouter>
			<Main />
		</BrowserRouter>
	);
}

export default App;
