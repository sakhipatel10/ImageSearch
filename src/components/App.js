import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

	state = {images : [] };

	onSearchSubmit = async (term) => {
		const response = await axios.get('https://api.unsplash.com/search/photos',{
			params : {query: term},
			headers : {
				Authorization : 'Client-ID 20217571445857a84ece98ea8bdef9bce94538afd6dfc5a73eb2e07ac62e3cab'
			}
		}
		);
		this.setState({images : response.data.results});
	};

	render(){
		return (
		<div className="ui container" style={{marginTop : '10px'}}>
			<SearchBar onSubmitt = {this.onSearchSubmit} />
			<ImageList images = {this.state.images}/>
		</div>
		);

	}
}

export default App;