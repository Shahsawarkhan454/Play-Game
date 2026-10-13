const gameNum = 41;
let userNum = Number(prompt("Enter the guess number"));

while (userNum !== gameNum) {
    userNum = Number(prompt("You entered the wrong number, try again"));
}

console.log("Congratulations! You entered the correct number.");