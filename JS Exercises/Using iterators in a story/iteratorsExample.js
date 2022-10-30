/*
 
JAVASCRIPT: ARRAYS, LOOPS, AND OBJECTS
Mini Linter
In this project, you will use what you know about iterating over arrays to improve the quality of a paragraph and gather some information about that paragraph.
 
This is the same type of work that word processing software does. Additionally, you may have heard of linting, a process by which text is evaluated and improved by an application. In this project, you will create a miniature version of a linter using array methods that you have learned.
 
If you get stuck during this project or would like to see an experienced developer work through it, click “Get Help“ to see a project walkthrough video.
 
Tasks
8/8Complete
Mark the tasks as complete by checking them off
1.
In the code editor, there is a string called story. We want to gather some information about the individual words and sentences in the string. Let’s split the string into individual words and save them in a new array called storyWords.
 
2.
Log how many words there are in this story to the console.
 
3.
There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this.
 
4.
There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this. Try it on your own first. If you need help, consult the hint.
 
5.
Now, count how many sentences are in the paragraph.
 
This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or an exclamation mark (!). You could iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as its final character.
 
6.
Log these items to the console:
 
The word count
The sentence count
The number of times each overused word appears
You could choose to simply log them one by one or, for a challenge, create a function that logs all of them with some formatting.
 
7.
Now, log the betterWords array to the console as a single string.
 
8.
Congratulations! You’ve improved the original paragraph and given the user some important information about his or her work. Think about ways in which you can extend this project, potentially by using other JavaScript knowledge you have.
 
Here are some ideas:
 
For the overused words, remove it every other time it appears.
 
Write a function that finds the word that appears the greatest number of times.
 
Replaced overused words with something else.
 
*/
 
 
 
 
 
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
 
let overusedWords = ['really', 'very', 'basically'];
 
let unnecessaryWords = ['extremely', 'literally', 'actually' ];
 
let storyWords = story.split(' ');
console.log(storyWords.join(' '));
console.log();
console.log("Words of story: " + storyWords.length);
 
let betterWords = storyWords.filter(word => {
  return (word != unnecessaryWords[0] && word != unnecessaryWords[1] && word != unnecessaryWords[2]);
});
 
console.log("Better words of story: " + betterWords.length);
 
let overusedArray = storyWords.filter(word => {
  return (word === overusedWords[0] || word === overusedWords[1] || word === overusedWords[2]);
});
 
console.log("Overused words: " + overusedArray.length);
 
let numOfSentences = 0;
for(let i=0; i<story.length; i++){
  if(story[i] === '.' || story[i] === '!'){
    numOfSentences++;
  }
}
console.log("Number of sentences in story string: " + numOfSentences);
 
console.log();
console.log("Better words story: ");
console.log(betterWords.join(' '));
console.log();
 
// Additional Functions
function removeOverused(storyWords){
  // First, I will create a new array with the following attributes:
  // Length = overusedWords.length, because in this array
  // I will match each overused word with a counter of its usingnes// in     // the story
  let newStoryWords = [];
  let counterOverused = overusedWords.map(word => 0);
 
  for(let i=0; i<storyWords.length; i++){
    // Now, I have access to a single word of story
    newStoryWords.push(storyWords[i]);
    for(let j=0; j<overusedWords.length; j++){
      if(storyWords[i] === overusedWords[j]){
        // console.log(overusedWords[j]);
        counterOverused[j]++;
        // console.log(counterOverused[j]);
      }
      // Check if counter > 1, to delete the word
      if(counterOverused[j] > 1){
        // I will remove the word that I last entered in my new array
        newStoryWords.pop();
      }
    }  //   End of 2nd for-loop
  }  // End of 1st for-loop
  return newStoryWords;
}
 
newStoryWords = removeOverused(storyWords);
console.log("New story words: ");
console.log(newStoryWords.join(' '));
console.log();
console.log();
 
// Second function
function findMax(storyWords){
  // First, I will create a new array that contains all the single words
  // of the initial array
  singleWords = [];
  singleWords.push(storyWords[0]);
  for(let i=1; i<storyWords.length; i++){
    let counter = 0;
    for(let j=0; j<singleWords.length; j++){
      if(storyWords[i] != singleWords[j]){
        counter++;
      }
    }
    if(counter === singleWords.length){
      singleWords.push(storyWords[i]);
    }
  }
  // Secondly, I will create a new array, in which I will match
  // all the elements of singleWords with a counter of this
  // word's appearance
  let counterAppearances = singleWords.map(word => 0);
  // The new array has "n" elements, where
  // n = singleWords.length
  // Scanning again the string to increase the appearances
  for(let i=0; i<storyWords.length; i++){
    for(let j=0; j<singleWords.length; j++){
      if(storyWords[i] === singleWords[j]){
        counterAppearances[j]++;
      }
    }  // END OF 1ST FOR-LOOP
  }  // END OF 2ND FOR-LOOP
 
  // Last step is to check the max value of appearances
  let positionOfMax = 0;
  let max = counterAppearances[0];
  for(let i=1; i<counterAppearances.length; i++){
    if(counterAppearances[i] > max){
    max = counterAppearances[i];  
    positionOfMax = i;
    }    
  }
 
  // Now, I have the position of max-appearances element and the max value
  let singleWordMax = singleWords[positionOfMax];
  console.log("Most word-appearances in story: ");
  console.log("'" + singleWordMax + "' ----> " + max + " times");
}
 
findMax(storyWords);