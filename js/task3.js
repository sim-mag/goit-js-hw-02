// SPAM protection

function checkForSpam(message) {
  let lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

console.log(checkForSpam("Latest sale offers")); // true
console.log(checkForSpam("Get your free spam")); // true
console.log(checkForSpam("Hello, how are you?")); // false
console.log(checkForSpam("Amazing deal on shoes!")); // false
