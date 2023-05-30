import React from 'react';
import { Row } from './Row';

export const Grid = ({ guessesLeft}: {guessesLeft: number[]}) => {
	// we need to import our guesses, then map it to each "row." 
	// This is a lot easier than i thought it would be lol.
	return (
		<div>
			{guessesLeft.map((g, i) => {
			return <Row key={i} /> 
			      })}	
		</div>
	);
}
