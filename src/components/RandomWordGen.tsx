import React from 'react';
import { useEffect, useState } from 'react';
import words from './words';
import EndingPage from './EndingPage';
import { Input, Space } from 'antd';
import checkIfGuessIsExactMatch from '../utils';

const RandomWordGen = () => {
	const [guessesLeft, setGuessesLeft] = useState(5);

	const { Search } = Input;
	let item = words[Math.floor(Math.random() * words.length)];
	// this is to compare the string fetched from the array with 
	// the input from the user.
	const givenArray = Array.from(item);

	// then put item into an array && split specified item into characters

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

		// this stringifies both arrays and then compares the values between strings
		const equals = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b);

		if (equals(givenArray, userInput)) {
			alert("HOoooooray you got it right lol");
			setGuessesLeft(0);	
		}	
	}

	const OnSearch = (value: string) => {
		console.log("you have this many guesses left:", guessesLeft);

		const userInput = Array.from(value);
		
		const listUserInput = userInput.map((i, k) => <li key={k}>{i}</li>); // TODO!

		checkGuess(value);
		setGuessesLeft(guessesLeft - 1)
	};

	if (guessesLeft === 0) {
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

			</>

		)
	}
	

}

export default RandomWordGen;
