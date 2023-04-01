import React from 'react';
import Card from './Card'

const Kittens = ({catsArray}) => {
	return(
		<div>
			{
				catsArray.map((cats, i) =>{
					return(
						<Card
						key = {cats.id}
						id = {cats.id}
						name = {cats.name} 
						email = {cats.email}
						/>
					);
				})
			}
		</div>
	)
}

export default Kittens;