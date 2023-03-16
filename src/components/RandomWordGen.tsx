import React from 'react';
import { useEffect, useState } from 'react';
import words from '../words';
import { Input, Space } from 'antd';

const RandomWordGen = () => {

	const { Search } = Input;
	let mod;
	const onSearch = (value: string) => console.log(value);
	let item = words[Math.floor(Math.random() * words.length)];

	// then put item into an array && split specified item into characters
	let array = Array.from(item);

	console.log(array);

	return (
		<>
			<ul>
				<li>
				</li>
				<li>
				</li>
				<li>
				</li>
			</ul>
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
