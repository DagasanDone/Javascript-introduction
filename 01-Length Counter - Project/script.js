
const calculateCharacter = () =>{

let tweet = prompt('What is your tweet?'); 

let tweetCount = tweet.length ; 
console.log(tweetCount);

let tweetLeft = 150 - tweetCount ; 
console.log(tweetLeft);

console.log(`You have written ${tweetCount} characters, you have ${tweetLeft} charecters remaining.`);

}


// Invoke the function when button is clicked




btn.addEventListener('click', calculateCharacter);
