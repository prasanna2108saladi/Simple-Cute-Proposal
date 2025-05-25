const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

// Move the "No" button when mouse hovers
noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * 300) - 150;
  const y = Math.floor(Math.random() * 300) - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Show a cute message when "Yes" is clicked
yesBtn.addEventListener('click', () => {
  response.textContent = "Yay! I knew you'd say yes! 💑💞";
});
