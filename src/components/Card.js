import { useState } from 'react';
import heart from '../svg/heart.svg';

const Card = ({id, name, email}) => {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount(count + 1)
	}

	return(
		<>	
			<div className = 'db mw5 bg-light-green shadow-5 br3 dib bw2 ma2  tc blac sh-5 pa4 -ns mv3 ba b--black-10'>
				<img className= 'db ba b--black-10'
					alt="kittens" src={`https://robohash.org/${id}.png?set=set4`}
				/>
				<dl className="mt2 f6 lh-copy">		
					<dt className="clip">Title</dt>
					<dd className="ml0">{name}</dd>
					<dt className="clip">Artist</dt>
					<dd className="ml0 gray">{email}
				</dd>

				<h1>likes:{count}</h1>
				
				<img className='heart'
						alt='heart'
						src={heart}
						style={{ width: 20 }}
					/>
				
				</dl>
				<button className='button is-danger' onClick={handleClick}>Like</button>		
			</div>
			
		</>	
	);
}

export default Card;

