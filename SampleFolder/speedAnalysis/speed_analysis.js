let testText =[ "The quick brown fox jumps over the lazy dog.","Welcome to Introduction to Math and Date Objects.",
    "After watching this video, you will be able to explain the significance of the math object and implement mathematical operations.",
    " Utilize date objects to extract specific date components and perform date arithmetic.",
    "Explain the use of timing functions in Javascript.",
    "In Javascript, the math object is a powerful built in global object that equips developers with a wide range of mathematical methods and constants.",
    " It serves as a toolbox for performing essential mathematical operations in your code.",
    " Here are some common operations you can achieve using math objects, rounding numbers, exponentation and logarithms, and random number generation.",
    "lets explore each with examples."," Math object provides functions for rounding numbers which are handy for various applications.",
    " In this example, const number equals 3.6 defines a variable number with the value 3.6. The math.",
    "round method, rounds numbers to the nearest integer, resulting in rounded being set to four.",
    "The math.ceil method rounds numbers to the nearest integer, setting ceil to four.",
    "The math.floor method rounds numbers to the nearest integer, setting floor to three.",
    "Math object is equipped to handle exponentation and logarithmic calculations. "];
   
let startTime, endTime;
var randomText;
function startTest() {
// Set the test text
 const randomidex=Math.floor(Math.random()*testText.length);
randomText=testText[randomidex];
document.getElementById("inputText").value = randomText;

// Reset user input and output
let userInput = document.getElementById("userInput");
userInput.value = "";
userInput.readOnly = false;
userInput.focus();

document.getElementById("output").innerHTML = "";

// Start timer
startTime = new Date().getTime();
}
 function endTest() {
            endTime = new Date().getTime();

            // Disable user input
            document.getElementById("userInput").readOnly = true;

            // Calculate time elapsed and words per minute (WPM)
            var timeElapsed = (endTime - startTime) / 1000; // in seconds
            var userTypedText = document.getElementById("userInput").value;

            // Split the text using regex to count words correctly
            var typedWords = userTypedText.split(/\s+/).filter(function (word) {
                return word !== "";
            }).length;

            var wpm = 0; // Default value

            if (timeElapsed !== 0 && !isNaN(typedWords)) {
                wpm = Math.round((typedWords / timeElapsed) * 60);
            }

            // Display the results
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +"<p>Total Length :"+randomText.length+
                "<p>Words Typed: " + typedWords + "</p>" +
                "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
                "<p>Words Per Minute (WPM): " + wpm + "</p>";
            }