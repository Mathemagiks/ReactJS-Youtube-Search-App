import React from 'react';
import ReactDOM from 'react-dom';
import YTSEarch from 'youtube-api-search';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyDtRnn9HErYyKhbcIhI4n9BYMfQZo9XBHs';
// Create a new Component. This component should 
// produce some html.
const App = () => {
	return (
	<div>
	 <SearchBar />
	</div>
	);
}

// Take this components generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

