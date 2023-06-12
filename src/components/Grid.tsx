import React from 'react';
import { Row } from './Row';

export const Grid = ({ currentGuess}: {currentGuess: string[]}) => {
	// we need to import our guesses, then map it to each "row." 
	// This is a lot easier than i thought it would be lol.
	return (
		<div>
			{currentGuess.map((g, i) => {
			return <Row key={i} /> 
			      })}	
		</div>
	);
}
