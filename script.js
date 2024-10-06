// Function to check the entered name and show the message
function checkName() {
  const nameInput = document.getElementById('nameInput').value;
  const correctName = "Tarteel";  // Replace with her name
  const messageDiv = document.getElementById('message');
  const formContainer = document.getElementById('formContainer');
  const proposalMessage = document.getElementById('proposalMessage');

  if (nameInput === correctName) {
      formContainer.classList.add('hidden');  // Hide the name form
      proposalMessage.innerText = `${nameInput}! You are the most beautiful thing happened to me ❤️`;  // Update message with her name
      messageDiv.classList.remove('hidden');  // Show the love message
      startConfetti();  // Start the confetti celebration effect
  } else {
      alert("That's not the right name! Try again.");
  }
}
// Moving button effect
const thinkButton = document.getElementById('thinkButton');
thinkButton.addEventListener('mouseover', function() {
  const randomX = Math.random() * (window.innerWidth - thinkButton.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - thinkButton.offsetHeight);
  thinkButton.style.position = 'absolute';
  thinkButton.style.left = `${randomX}px`;
  thinkButton.style.top = `${randomY}px`;
});

// Accept proposal and show happiness message
function acceptProposal() {
  const messageDiv = document.getElementById('message');
  const happinessMessage = document.getElementById('happinessMessage');

  // Hide the message and show the happiness text
  messageDiv.classList.add('hidden');
  happinessMessage.classList.remove('hidden');
}

// Confetti effect with less density and more focus on the sides
function startConfetti() {
  const confettiCanvas = document.getElementById('confettiCanvas');
  const confetti = confettiCanvas.getContext('2d');
  const confettiPieces = [];
  const numConfetti = 100;  // Reduced the number of confetti pieces
  const colors = ['#ff5e6c', '#ffd700', '#00c4ff', '#34d399', '#ff7f50']; // Celebration colors

  // Set canvas size
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const centerX = window.innerWidth / 2;
  const buffer = 300; // Increased buffer to make confetti fall further away from the text

  for (let i = 0; i < numConfetti; i++) {
      let confettiX;
      // Confetti stays more to the sides
      if (Math.random() < 0.5) {
          // Left side
          confettiX = Math.random() * (centerX - buffer);
      } else {
          // Right side
          confettiX = centerX + buffer + Math.random() * (window.innerWidth - (centerX + buffer));
      }

      confettiPieces.push({
          x: confettiX,
          y: Math.random() * window.innerHeight,
          w: Math.random() * 10 + 5,  // Width of confetti piece
          h: Math.random() * 20 + 5,  // Height of confetti piece
          color: colors[Math.floor(Math.random() * colors.length)],
          d: Math.random() * 4 + 1  // Falling speed
      });
  }

  function drawConfetti() {
      confetti.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      confettiPieces.forEach((p) => {
          confetti.beginPath();
          confetti.rect(p.x, p.y, p.w, p.h);
          confetti.fillStyle = p.color;
          confetti.fill();
      });
      updateConfetti();
  }

  function updateConfetti() {
      confettiPieces.forEach((p) => {
          p.y += p.d;
          if (p.y > window.innerHeight) {
              const centerX = window.innerWidth / 2;
              const buffer = 300; // Maintain the same buffer for falling
              if (Math.random() < 0.5) {
                  p.x = Math.random() * (centerX - buffer);
              } else {
                  p.x = centerX + buffer + Math.random() * (window.innerWidth - (centerX + buffer));
              }
              p.y = 0;
          }
      });
  }

  setInterval(drawConfetti, 30); // Draw every 30 milliseconds
}
