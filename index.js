let minnum = 1;
let maxnum = 100;
let answer = Math.floor(Math.random() * (maxnum - minnum + 1) * minnum);
let running = true;
while (running) {
  let guess = window.prompt("Enter a Number between 1 and 100");
  guess = Number(guess);
  if (guess < answer) {
    window.alert("Too Low");
  } else if (guess > answer) {
    window.alert("Too High");
  } else {
    window.alert("You guessed right");
    running = false;
  }
}
