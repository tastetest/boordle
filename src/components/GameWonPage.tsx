import React from 'react';

export const GameWonPage = () => {
	// do somethinghere 
	// maybe also have guessesLeft as a 
	// useContext that can be accessed here to see how many guesses you used
	return (
		<> 
			<div style={{color: 'white'}}>
				<h1>You have won! Congrats :)</h1>
				<p> with this many guesses left</p>	 
			</div>
		</>	
	)
}
