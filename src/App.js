import React from 'react';
import Navbar from './components/layout/Navbar';
import Tracks from './components/music/Tracks';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar title='Music Finder app' />
			<div className='container'>
				<Tracks />
			</div>
		</div>
	);
}

export default App;
