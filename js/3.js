var password = prompt("Enter a password:");
var confirmPassword = prompt("Confirm your password:");

if (password === confirmPassword) {
  console.log("password is valid");
} else {
  console.log("password is not valid");
}