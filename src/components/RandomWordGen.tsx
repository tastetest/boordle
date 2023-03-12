import React from 'react';
import { words } from './words'
import { useEffect, useState } from 'react';

const RandomWordGen = () => {

	let item = words[Math.floor(Math.random() * words.length)];
	// then split specified item into characters
	// item.splice('0, 4') -- we want to make sure the word is only a 5 letter word

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
