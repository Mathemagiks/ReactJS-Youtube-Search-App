import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyDtRnn9HErYyKhbcIhI4n9BYMfQZo9XBHs';


// Create a new Component. This component should 
// produce some html.
class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'painbastard'}, (videos) => {
			this.setState({ videos });
			// this.setState({ videos: videos});
        });
	}
	render(){
		return (
	      <div>
	       <SearchBar />
	      </div>
	   );

	}
	
}

// Take this components generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

