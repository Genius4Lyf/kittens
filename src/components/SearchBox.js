import React from 'react';
import './search.css'
import '../containers/App.css'

const Search = ({searchfield, searchChange}) => {
	return(
		<div className ='bds ktr'>
			<form>
				<input type="search" 
				placeholder = 'Search KIttens'
				onChange = {searchChange} 
				required></input>
				<i className="fa fa-search"></i>
			</form>				
		</div>	
	)
};

export default Search;

				