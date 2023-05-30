# boordle

This is an app I'm making that aims to be a bootleg of wordle, as a challenge for myself. This app is made in react and typescript.

## TODO:
1. [x] get word generation to generate a 5 letter word randomly 
2. [x] use string comparison methods to validate if a person has typed the right word or not
3. [x] make unordered lists to contain each letter, add validation for each element within that list 
4. [x] indicate what letters are correct and wrong, or misplaced
5. [x] implemented guess counter as well as hasWon state
6. [x] fixed state bugs with given word being refreshed constantly
7. [ ] work on adding boxes that will fill when you make an answer

### random Thoughts:
i'm going to have to use my own in house library for word generation, I think. Created a library called wordModule.
|| i could just use randomly generated passwords that have the specific max length of 5 characters,
and to prevent bikeshedding. Then after Boordle is completed, then I can focus on maintaining a proper word generator library.

- Instead of complicating things, i just used indexOf to indicate if a letter is in the array or not (that matches the given word, at least), and then further more detect if the indexes of both arrays match, if so, return green. If not, return gray. Pretty simple and neat

Here are my current thoughts: I made two components. One called Grid, and one called row. Row is a child component of Grid, and Grid is a child component of RandomWordGen (Refactoring pending). I want to map the row component in grid so that it will match with the guesses you have left, HOWEVER I only have one state for guesses called guessesLeft, and it takes a number as a type. I would need an array or object for mapping, and it wouldn't always correspond with the mapping technique. This means I might have to make another state called currentGuess where it captures what you are currently trying to do. Then it can take previous guesses and fill them into the boxes ? And then maybe I should change up how I do the checkGuess.That's tomorrow's problem.


