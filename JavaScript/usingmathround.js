// Write your function here:
function numImaginaryFriends (totalFriends) {
  var imaginaryFriends = totalFriends * 0.33;
  return (Math.round(imaginaryFriends));
}





// Uncomment the line below when you're ready to try out your function
console.log(numImaginaryFriends(18)) // Should print 6

// We encourage you to add more function calls of your own to test your code!

/* A person’s number of imaginary friends are always 33% of their total friends.

Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.

Since friends can only come in whole numbers, be sure to round your result before returning it.

The JavaScript Math.round() function will come in handy. Check out the documentation here to figure out how it works. */