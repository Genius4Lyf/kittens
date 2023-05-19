import React from 'react';
import Card from './Card'

const Kittens = ({ catsArray, onClick, count }) => {
	const renderedCards = catsArray.map((cats, i) =>{
        return <Card count={count} handleLikeClick={onClick} key={cats.id} id={cats.id} name={cats.name} email={cats.email} />
    })

	return(
		<>
			<div>
				{renderedCards}
			</div>
		</>
		
	)
}

export default Kittens;