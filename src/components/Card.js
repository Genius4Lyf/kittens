import React from 'react';
import heart from '../svg/heart.svg';
import './Container.css';

const Card = ({id, name, email}) => {
	return(
		<>
			<div className = 'db mw5 bg-light-green shadow-5 br3 dib bw2 ma2 grow tc blac sh-5 pa4 -ns mv3 ba b--black-10'>
				<img className= 'db ba b--black-10'
					alt="kittens" src={`https://robohash.org/${id}.png?set=set4`}
				/>
				
				<dl className="mt2 f6 lh-copy">		
					<dt className="clip">Title</dt>
					<dd className="ml0">{name}</dd>
					<dt className="clip">Artist</dt>
					<dd className="ml0 gray">{email}</dd>
				</dl>
				<div>likes:</div>
				<img className='heart'
						alt='heart'
						src={heart}
						style={{ width: 20 }}
					/>
			</div>
		</>	
	);
}

export default Card;