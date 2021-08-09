import React from 'react';

import './App.css';
import Header from './components/Header';
import MovieAPI from './components/MovieAPI';
import Footer from './components/Footer';

const App = () => {

	return (
		<div className='movie-app'>
			<div className='row'>
				<Header />
			</div>
			<div className='row'>
				<MovieAPI />
			</div>
			<div className='row'>
				<Footer />
			</div>
		</div>
	);
};

export default App;
