let minnum = 1;
let maxnum = 100;
let answer = Math.floor(Math.random() * (maxnum - minnum + 1) * minnum);

let guess;

let running = false;

// Function to handle the guessing logic
const handleGuess = () => {
  const guess = document.getElementById("guess").value;
  if (guess < answer) {
    document.getElementById("myh2").textContent = "TOO LOW";
    document.getElementById("mybut2").onclick = handleGuess; // Wait for next guess
  } else if (guess > answer) {
    document.getElementById("myh2").textContent = "TOO HIGH";
    document.getElementById("mybut2").onclick = handleGuess; // Wait for next guess
  } else {
    document.getElementById("myh2").textContent = "🎉YOU GUESSED RIGHT🎉";
    confetti({
      particleCount: 400,
      spread: 200,
    });
    running = false; // Exit the loop
  }
};

// Start the guessing loop when mybut2 is clicked
document.getElementById("mybut2").onclick = function () {
  if (!running) {
    running = true;
    handleGuess();
  }
};
