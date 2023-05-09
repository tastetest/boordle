# boordle

This is an app I'm making that aims to be a bootleg of wordle, as a challenge for myself. This app is made in react and typescript.

## TODO:
1. [x] get word generation to generate a 5 letter word randomly 
2. [x] use string comparison methods to validate if a person has typed the right word or not
3. [x] make unordered lists to contain each letter, add validation for each element within that list 
4. [x] indicate what letters are correct and wrong, or misplaced
5. [ ] 
6. [ ] 

### random Thoughts:
i'm going to have to use my own in house library for word generation, I think. Created a library called wordModule.
|| i could just use randomly generated passwords that have the specific max length of 5 characters,
and to prevent bikeshedding. Then after Boordle is completed, then I can focus on maintaining a proper word generator library.

- Instead of complicating things, i just used indexOf to indicate if a letter is in the array or not (that matches the given word, at least), and then further more detect if the indexes of both arrays match, if so, return green. If not, return gray. Pretty simple and neat

- So currently, when i run the program the state will keep updating with no limit. Also, there is a bug where you get a new word to match every time you hit search. Today I want to specifically work on making sure that when the state is equal to 0, then your search will be disabled.
