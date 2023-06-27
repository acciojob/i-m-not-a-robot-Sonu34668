const imageContainer = document.getElementById("imageContainer");
const message = document.getElementById("message");
const resetButton = document.getElementById("resetButton");
const verifyButton = document.getElementById("verifyButton");
const result = document.getElementById("result");

// Define the images API URL and the number of images
const imagesApiUrl = "https://picsum.photos/150";
const numImages = 6;

// Initialize the game state
let state = 1;
let selectedImages = [];

// Load the images and render them
function loadImages() {
  let imageIds = getRandomImageIds();
  imageContainer.innerHTML = "";
  imageIds.forEach(id => {
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("image");
    let img = document.createElement("img");
    img.src = `${imagesApiUrl}?random=${id}`;
    img.classList.add(`img${id}`);
    img.addEventListener("click", () => {
      if (state === 1) {
        selectedImages = [id];
        resetButton.style.display = "block";
        state = 2;
      } else if (state === 2) {
        selectedImages.push(id);
        verifyButton.style.display = "block";
        state = 3;
      }
    });
    imageDiv.appendChild(img);
    imageContainer.appendChild(imageDiv);
  });
}

// Get an array of random image IDs, with one ID repeated
function getRandomImageIds() {
  let ids = [];
  for (let i = 1; i <= numImages; i++) {
    ids.push(i);
  }
  let repeatId = Math.floor(Math.random() * numImages) + 1;
  ids.push(repeatId);
  ids.sort(() => Math.random() - 0.5);
  return ids;
}

// Reset the game state
function reset() {
  selectedImages = [];
  resetButton.style.display = "none";
  verifyButton.style.display = "none";
  result.textContent = "";
  state = 1;
}

// Verify the selected images
function verify() {
  if (selectedImages.length === 2) {
    if (selectedImages[0] === selectedImages[1]) {
      result.textContent = "You are a human. Congratulations!";
    } else {
      result.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
    }
    verifyButton.style.display = "none";
    state = 4;
  }
}

// Add event listeners to the buttons
resetButton.addEventListener("click", reset);
verifyButton.addEventListener("click", verify);

// Start the game by loading the images
loadImages();