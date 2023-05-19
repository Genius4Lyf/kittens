import React, { useEffect, useState} from 'react';
import Kittens from '../components/Kittens';
import Search from '../components/SearchBox'
import './App.css';
import Scroll from '../components/Scroll';

function App () {
	const [catsArray, setCatsArray] = useState([])
	const [searchfield, setSearchfield] = useState('')
	const [count, setCount] = useState(0)

	const handleChange = (event) => {
		setSearchfield(event.target.value)
	}

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		 .then(response => {
		 	return response.json()
		 })
		 .then(users => {
		 	return setCatsArray(users)
		 })
	}, [])

	const filteredCats = catsArray.filter(cat =>{
		return cat.name.toLowerCase().includes(searchfield.toLowerCase())
	})

	const handleClick = () => {
		setCount(count + 1)
	}


	return !catsArray.length ?
			<h1>LOADING</h1> :
			(
				<div className='tc kbr'>
					<h1 className = 'f1'>kittensHUB</h1>
					<Search searchChange = {handleChange} />
					<Scroll>
						<Kittens catsArray = {filteredCats} onClick={handleClick} />
					</Scroll>
				</div>	
			);	
}

export default App;