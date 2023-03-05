import React from 'react';
import randomWords from 'random-words';
import { useEffect, useState } from 'react';

const RandomWordGen = () => {

	let word = require('random-words');

	return (
		<>
			<div>
				{word({ exactly: 1, minLength: 5, maxLength: 6 })}
			</div>
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
