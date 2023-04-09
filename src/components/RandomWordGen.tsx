import React from 'react';
import { useEffect, useState } from 'react';
import words from './words';
import { Input, Space } from 'antd';
//	import {checkGuess } from '../'

const RandomWordGen = () => {

	const { Search } = Input;
	let item = words[Math.floor(Math.random() * words.length)];
	// this is to compare the string fetched from the array with 
	// the input from the user.
	const givenArray = Array.from(item);

	const onSearch = (value: string) => {

		// this splits the search value into an array with
		// individual characters in each index
		let userInput = Array.from(value); 

		let len = Math.max(givenArray.length, userInput.length);
		// this is to compare between each element in both arrays and 
		// return whether they are true or false.

		for (let i = 0; i < len; i++) {
			console.log(givenArray[i], userInput[i], givenArray[i] === userInput[i])
			if (givenArray[i] === userInput[i]) {
				console.log("you guessed the right word");
			} else {
				console.log("you guessed the wrong word");
			}
		}
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
