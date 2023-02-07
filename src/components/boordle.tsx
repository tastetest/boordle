import react from "react"; 
import useEffect from "react";
import randomWordGen from './randomwordgen';

const Boordle = () => {
	// let's do some magic for the individual item

	let randomWord = require('random-words');

	console.log(randomWord(1,{exactly: 1, maxLength: 5, minLength: 5, wordsPerString:5}));
	return <div>hi lol</div> ;
}

export default Boordle;
