import React from 'react';

const Card = ({name, email, id}) => {
	return (
		<div className="tc bg-light-green grow br3 dib ma2 pd3 shadow-5 bw2">
			<img alt="Robots" src={`https://robohash.org/${id}size=300x300`}></img>
			<h3>{name}</h3>
			<p>{email}</p>
		</div>
	);
}

export default Card;