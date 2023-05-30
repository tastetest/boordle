import React from 'react';
import { useEffect, useState } from 'react';
import words from './words';
import EndingPage from './EndingPage';
import { GameWonPage } from './GameWonPage';
import { Grid } from './Grid';
import { Input, Space } from 'antd';
import { equals } from '../utils';

const RandomWordGen = ({ givenArray }:{givenArray: string[]}) => {
	const [guessesLeft, setGuessesLeft] = useState(5);
	const [currentGuess, setCurrentGuess] = useState(); // TODO!! do something with this.
	const [hasWon, setHasWon] = useState(false);
	const [textInput, setTextInput] = useState('');
	const [updatedText, setUpdatedText ] = useState(textInput);

	const { Search } = Input;

	const listItems = givenArray.map((i, k) => <li key={k}>{i}</li>);

	const checkGuess = (value: string) => {
		// this splits the search value into an array with
		// individual characters in each index
		let userInput = Array.from(value);

		let len = Math.max(givenArray.length, userInput.length);

		// this is to compare between each element in both arrays and 
		// return whether they are true or false.

		for (let i = 0; i < len; i++) {
			// indexOf will search for that specific element in the given array.
			console.log(givenArray[i], userInput[i], givenArray[i] === userInput[i])

			let letterPosition = givenArray.indexOf(userInput[i]);

			if (letterPosition === -1) {
				console.log("gray square");
			} else {
				if (givenArray[i] === userInput[i]) {
					console.log("green square");
				} else {
					console.log("yellow square");
				}

			}

		}


		if (userInput.length !== 5) {
			alert("That's not a five letter word.")
		}

		if (equals(givenArray, userInput)) {
			return setHasWon(true);
		} else {
			return setHasWon(false);	
		}

	}

	const OnSearch = (value: string) => {

		console.log("you have this many guesses left:", guessesLeft);

		const userInput = Array.from(value);
		
		const listUserInput = userInput.map((i, k) => <li key={k}>{i}</li>); // TODO!
		checkGuess(value);
		setTextInput(value);
		setGuessesLeft(guessesLeft - 1)

	};

	if (hasWon === true) {
		return <GameWonPage 
		gameState={hasWon} theGuessesLeft={guessesLeft}/>
	} 
	else if (guessesLeft === 0) {
		return <EndingPage />
	} else {
		return (
			<>
				<div style={{color: 'white'}}>
					{listItems}
				</div>
				<Search 
					placeholder="hi"
					enterButton="Search"
					size="large"
					onSearch={OnSearch}
					style={{ width: '30%'}}
				/>
				<div style={{color: 'white'}}>
					{textInput}
				</div>
				<Grid guessesLeft={guessesLeft} />


			</>

		)
	}

}

export default RandomWordGen;
