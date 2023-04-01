import React, {Component} from 'react';
import Kittens from '../components/Kittens';
import Search from '../components/SearchBox'
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super()
		this.state = {
			catsArray: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		 .then(response => {
		 	return response.json()
		 })
		 .then(users => {
		 	return this.setState({catsArray: users})
		 })
	}

	handleChange = (event) => {
		this.setState({searchfield: event.target.value})
  	}

	render() {
		const {catsArray, searchfield} = this.state;
		const filteredCats = catsArray.filter(cat =>{
			return cat.name.toLowerCase().includes(searchfield.toLowerCase())
		})

		return !catsArray.length ?
			<h1>LOADING</h1> :
			(
				<div className='tc kbr'>
					<h1 className = 'f1'>kittensHUB</h1>
					<Search searchChange = {this.handleChange} />
					<Scroll>
						<Kittens catsArray = {filteredCats} />
					</Scroll>
				</div>	
			);	 
	}
}
export default App;