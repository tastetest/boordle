import words from './words';

interface GameState {
	word: string,
	guesses: string[];
	attemptsLeft: any;
}

function generateRandomWord(): string {
	const index = Math.floor(Math.random() * words.length);
	return words[index];
}

function checkGuess(word: string, guesses: string[]): boolean[] {
	const result: boolean[] = [];

	for (let i = 0; i < word.length; i++) {
		result.push(guesses.includes(word[i]));
	}
	return result;
}

function isGamewon(word: string, guesses: string[]): boolean {
	return checkGuess(word, guesses).every((isCorrect) => isCorrect);
}

function isGameOver(attemptsLeft: number): boolean {
	return attemptsLeft === 0;
}

function makeGuess(guess: string, gameState: GameState): GameState {
	const guesses = [...gameState.guesses, guess];
	const attemptsLeft = gameState.attemptsLeft - 1;
	return {
		...gameState,
		guesses,
		attemptsLeft,
	};
}

function initializeGameState(): GameState {
	const word = generateRandomWord();
	const guesses:any = [];
	const attemptsLeft = 6;
	return {
		word,
		guesses,
		attemptsLeft,
	};
}

