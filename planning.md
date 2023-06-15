# I have a couple ideas of what i want to do with the rendering of rows...

Currently, i have a system where it will detract the attempts left you have(guessesLeft). This is all fine and dandy, however I don't actually properly handle the current guess you do. So, I want to make a current Guess state hook that will monitor your current guess SO i can take that current guess and render it out every time a guess has been done.

## for the sake of debugging, let's actually focus on what is happening with the data, from the start of loading up the website, to actually interacting with the javascript.

1. You are given a word, you *shouldn't* be seeing the word, but your value that YOU input will be compared against said word.
2. when you submit a word in the search box, which is initially a string, will be put into an array by splitting up each character in your string and indexing them separately. This is creates a shallow copy of your initial string.
3. Then, your array is compared to the word array from the words.ts file. The word will also be split up so it can easily compare each element against your split array of elements. Then it runs through some checks for validation.
4. After that, we want to convert the array into an object so that it can be mapped into a render-able component
5. So the question is, how do I want the data converted, so that it can be stored as a map?

## Now I have the user input being rendered to the screen

But, there's an issue: It overwrites what has been rendered already. I want it to instead fill within each div after each other. How do I go about that? 

An idea I have is to create a for loop for EACH Row in the Grid component to check for if it is "filled". But i have no idea how i could detect that. 
Another idea I have is to loop over those elements and check if I've already "interacted" with that element before. Again i don't know how i would do that. I should look at other examples and see how they did it.
