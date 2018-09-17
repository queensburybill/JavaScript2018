/**
 * Write a function called guessingGame which takes in one parameter amount.
 * The function should return another function that takes in a parameter called guess.
 * In the outer function, you should create a variable called answer which is
 * the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.
 *
 * In the inner function, if the guess passed in is the same as the random number (defined in the outer function),
 * you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.
 *
 * You will have to make use of closure to solve this problem.
 *
 * @example (yours might not be like this, since the answer is random every time):
 *
 *  var guessRound1 = guessingGame(5)
 *  guessRound1(1) // "You're too low!"
 *  guessRound1(8) // "You're too high!"
 *  guessRound1(5) // "You're too low!"
 *  guessRound1(7) // "You got it!"
 *  guessRound1(1) // "You are all done playing!"
 *
 *  var guessRound2 = guessingGame(3)
 *  guessRound2(5) // "You're too low!"
 *  guessRound2(3) // "You're too low!"
 *  guessRound2(1) // "No more guesses the answer was 0"
 *  guessRound2(1) // "You are all done playing!"
 */
function guessingGame() {}

module.exports = {
  guessingGame
};
