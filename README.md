# boordle

This is an app I'm making that aims to be a bootleg of wordle, as a challenge for myself. This app is made in react and typescript.

## TODO:
1. [x] get word generation to generate a 5 letter word randomly 
2. [x] use string comparison methods to validate if a person has typed the right word or not
3. [x] make unordered lists to contain each letter, add validation for each element within that list 
4. [ ] indicate what letters are correct and wrong, or misplaced
5. [ ] 
6. [ ] 

### random Thoughts:
- what about generating the word, and then slicing each letter separately to put in a "private" list, 
and then compare that with the user's input? 
- random-words is inherently flawed. You can't specify an exact letter limit for each word, it only gives you a range
i'm going to have to use my own in house library for word generation, I think. Created a library called wordModule.
|| i could just use randomly generated passwords that have the specific max length of 5 characters,
and to prevent bikeshedding. Then after Boordle is completed, then I can focus on maintaining a proper word generator library.


- I want to take a random word, that has to be exactly 5 characters long, and then split (slice it, so we can have a copy of the original word before it gets split) it into individual characters with split(). 
Then i'll take those split characters and put them all into corresponding list elements(maybe with a forEach loop). Then when someone inputs their word, it will do a compare with the initial word that was fetched.

- So i think i will use indexOf to check for ANY valid instances of a certain letter within an array, and then return true if that is the case.
``` 
LetterIsInTheRightPlace would return true.
LetterIsInTheWordButNotTheRightPlace would return true.
LetterIsNotInTheWord would return false. 
```
