// Typewriter effect
const message = "Wishing you all the love, laughter, and magic today! ✨";
let i = 0;

function typeWriter() {
  if (i < message.length) {
    document.getElementById("typewriter").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
window.onload = typeWriter;

// Surprise reveal with burst animation
function showMagic() {
  const text = document.getElementById("magic-text");
  text.classList.add("reveal");

  // Firework burst
  for (let j = 0; j < 20; j++) {
    const burst = document.createElement("div");
    burst.className = "burst";
    burst.style.left = `${Math.random() * 90 + 5}%`;
    burst.style.top = `${Math.random() * 90 + 5}%`;
    burst.style.backgroundColor = getRandomColor();
    document.querySelector(".card").appendChild(burst);

    setTimeout(() => burst.remove(), 600);
  }
}

// Card click glow effect
document.getElementById("card").addEventListener("click", () => {
  const card = document.getElementById("card");
  card.style.boxShadow = "0 0 50px #fff, 0 0 80px #ff33cc";
  setTimeout(() => {
    card.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.4)";
  }, 600);
});

// Floating emojis
setInterval(() => {
  const emoji = document.createElement("div");
  emoji.className = "floating-emoji";
  emoji.innerText = ["💖", "🎉", "✨", "🌈", "💫", "🥳"][Math.floor(Math.random() * 6)];
  emoji.style.left = `${Math.random() * window.innerWidth}px`;
  emoji.style.bottom = "0px";
  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 5000);
}, 800);

// Random burst color
function getRandomColor() {
  const colors = ["#ff007f", "#33ccff", "#ffff66", "#66ff66", "#ff66cc"];
  return colors[Math.floor(Math.random() * colors.length)];
}


