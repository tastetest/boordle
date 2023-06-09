# boordle

This is an app I'm making that aims to be a bootleg of wordle, as a challenge for myself. This app is made in react and typescript.

## TODO:
1. [x] get word generation to generate a 5 letter word randomly 
2. [x] use string comparison methods to validate if a person has typed the right word or not
3. [x] make unordered lists to contain each letter, add validation for each element within that list 
4. [x] indicate what letters are correct and wrong, or misplaced
5. [x] implemented guess counter as well as hasWon state
6. [ ] render out damn boxes already

### random Thoughts:
i'm going to have to use my own in house library for word generation, I think. Created a library called wordModule.
|| i could just use randomly generated passwords that have the specific max length of 5 characters,
and to prevent bikeshedding. Then after Boordle is completed, then I can focus on maintaining a proper word generator library.

- Instead of complicating things, i just used indexOf to indicate if a letter is in the array or not (that matches the given word, at least), and then further more detect if the indexes of both arrays match, if so, return green. If not, return gray. Pretty simple and neat

- So currently, when i run the program the state will keep updating with no limit. Also, there is a bug where you get a new word to match every time you hit search. Today I want to specifically work on making sure that when the state is equal to 0, then your search will be disabled.

- I implemented a small function that is supposed to compare every element of an array and see if it's an exact match with another array. However, it returns undefined for whatever reason. Today is the day we try to fix this issue. This issue has been fixed. I replaced the function with a function that will convert the arrays to strings and then compare between the two to see if you get an exact match. If so, then it returns the state hasWon(true)

- I'm going to fix the state bug that i'm having where the given word refreshes every time you make a guess. So instead of fetching the word within the RandomWordGen component, i'm going to have it passed down as a readonly prop
