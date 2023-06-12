# I have a couple ideas of what i want to do with the rendering of rows...

Currently, i have a system where it will detract the attempts left you have(guessesLeft). This is all fine and dandy, however I don't actually properly handle the current guess you do. So, I want to make a current Guess state hook that will monitor your current guess SO i can take that current guess and render it out every time a guess has been done.

## for the sake of debugging, let's actually focus on what is happening with the data, from the start of loading up the website, to actually interacting with the javascript.

1. You are given a word, you *shouldn't* be seeing the word, but your value that YOU input will be compared against said word.
2. when you submit a word in the search box, which is initially a string, will be put into an array by splitting up each character in your string and indexing them separately. This is creates a shallow copy of your initial string.
3. Then, your array is compared to the word array from the words.ts file. The word will also be split up so it can easily compare each element against your split array of elements. Then it runs through some checks for validation.
4. After that, we want to convert the array into an object so that it can be mapped into a render-able component
5. So the question is, how do I want the data converted, so that it can be stored as a map?
