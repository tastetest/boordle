import React from 'react';
import { useEffect, useState } from 'react';
import words from './words';
import { Input, Space } from 'antd';

interface GameState {
	guesses: [];
	attemptsLeft: any;
}
const RandomWordGen = () => {

	let guess = 5;
	const [guessesLeft, setGuessesLeft] = useState(guess);

	const { Search } = Input;
	let item = words[Math.floor(Math.random() * words.length)];
	// this is to compare the string fetched from the array with 
	// the input from the user.
	const givenArray = Array.from(item);

	const makeGuess = (value: string, attemptsLeft: GameState) => {
		// to do here
	}
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
	}

	const onSearch = (value: string) => {
		setGuessesLeft(guess -= 1);
		console.log("you have this many guesses left:", guessesLeft);

		checkGuess(value);
		const userInput = Array.from(value);
		
		const listUserInput = userInput.map((i, k) => <li key={k}>{i}</li>);
		return (
			<>
				<div>
					{listUserInput}
				</div>
			</>
		)

	};


	// then put item into an array && split specified item into characters

	const listItems = givenArray.map((i, k) => <li key={k}>{i}</li>);

	return (
		<>
			<div style={{color: 'white'}}>
				{listItems}
			</div>
			<Search 
				placeholder="hi"
				allowClear
				enterButton="Search"
				size="large"
				onSearch={onSearch}
				style={{ width: '30%'}}
			/>

		</>

	)
}

export default RandomWordGen;
