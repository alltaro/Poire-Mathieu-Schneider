$(document).ready(function () {
  function loadRandomCard() {
    const randomIndex = Math.floor(Math.random() * 32);
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");
    const img4 = document.getElementById("img4");
    img1.src = `./script/Playing Cards/${randomIndex}.jpg`;
    img2.src = `./script/Playing Cards/${(randomIndex + 1) % 32}.jpg`;
    img3.src = `./script/Playing Cards/${(randomIndex + 2) % 32}.jpg`;
    img4.src = `./script/Playing Cards/${(randomIndex + 3) % 32}.jpg`;
  }
  window.onload = loadRandomCard;
  // Fonction pour récupérer les fichiers d'un dossier
  async function getFiles(dir) {
    const response = await fetch(dir);
    const text = await response.text();
    const html = new DOMParser().parseFromString(text, "text/html");
    const anchors = html.getElementsByTagName("a");
    const files = [];
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      if (anchor.href.includes(".jpg")) {
        files.push(anchor.href);
      }
    }
    return files;
  }

  // Fonction pour charger une image aléatoire
  async function loadRandomImage(img) {
    const dir = "./script/Playing Cards/";
    const files = await getFiles(dir);
    const randomIndex = Math.floor(Math.random() * files.length);
    const randomFile = files[randomIndex];
    img.src = randomFile;
  }

  // Utilisation de la fonction
  loadRandomImage(img3);
});
