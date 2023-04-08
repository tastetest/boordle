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
	let givenArray = Array.from(item);

	const onSearch = (value: string) => {

		// this splits the search value into an array with
		// individual characters in each index
		let userInput = Array.from(value); 

		if (userInput === givenArray) {
			console.log("this is the value: ", value)}
		else { 
			console.log("the values dont match")
		};
	};


	// then put item into an array && split specified item into characters

	const listItems = givenArray.map((i, k) => <li key={k}>{i}</li>);

	console.log(givenArray);

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
