let maximum = parseInt(prompt("Enter the maximum number: "));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number: "));
}



const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum)
let attempts = 1;

let guess = parseInt(prompt("Enter your first guess:"));
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high");
    } else {
        guess = prompt("Too low");
    } 
}
if (guess === 'q') {
    console.log("HAHA U QUOTYE");
} else {
    console.log(`YoU WIN! it took you ${attempts} guesses`);

}