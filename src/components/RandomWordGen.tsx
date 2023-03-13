import React from 'react';
import words from '../words'
import { useEffect, useState } from 'react';

const RandomWordGen = () => {

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
		</>

	)
}

export default RandomWordGen;
