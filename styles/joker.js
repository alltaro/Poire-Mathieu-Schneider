function startAnimation() {
  let smile = document.querySelector(".smile");

  // Ajout des animations CSS
  let smileAnimation = document.createElement("style");
  smileAnimation.textContent = `
       @keyframes smile-animation {
         0% { transform: rotate(0deg); }
         100% { transform: rotate(360deg); }
       }
    `;

  // Ajout des animations CSS
  document.head.appendChild(smileAnimation);

  // Ajout des animations aux éléments HTML
  smile.style.animation = "smile-animation 4s infinite linear";
}
