import React from 'react';
import { Row } from './Row';

export const Grid = ({ currentGuess}: {currentGuess: string[]}) => {
	// we need to import our guesses, then map it to each "row." 
	return (
		<div>
			{currentGuess.map((g, i) => {
			return <Row key={i} /> 
			      })}	
		</div>
	);
}
