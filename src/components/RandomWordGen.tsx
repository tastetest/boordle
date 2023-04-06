import React from 'react';
import { useEffect, useState } from 'react';
import words from './words';
import { Input, Space } from 'antd';
//	import {checkGuess } from '../'

const RandomWordGen = () => {

	const { Search } = Input;
	const onSearch = (value: string) => console.log(value);
	let item = words[Math.floor(Math.random() * words.length)];

	// then put item into an array && split specified item into characters
	let array = Array.from(item);

	const listItems = array.map((i, k) => <li key={k}>{i}</li>);

	console.log(array);

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
