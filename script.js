//your JS code here. If required.
const images = [
  "url-to-image-1",
  "url-to-image-2",
  "url-to-image-3",
  "url-to-image-4",
  "url-to-image-5"
];

// Choose a random image to repeat
const repeatImage = images[Math.floor(Math.random() * images.length)];

// Add a duplicate image to the array
images.push(repeatImage);

// Shuffle the array
for (let i = images.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [images[i], images[j]] = [images[j], images[i]];
}

// Assign class names to each image tag
const imgTags = document.querySelectorAll("img");
for (let i = 0; i < imgTags.length; i++) {
  imgTags[i].classList.add("img" + (i+1));
  imgTags[i].src = images[i];
}

let selectedImages = [];

// Add click event listeners to images
imgTags.forEach(img => {
  img.addEventListener("click", () => {
    if (selectedImages.length < 2) {
      img.classList.add("selected");
      selectedImages.push(img);
    }
    if (selectedImages.length === 2) {
      const verifyButton = document.getElementById("verify");
      verifyButton.classList.remove("hidden");
      verifyButton.addEventListener("click", () => {
        if (selectedImages[0].classList[0] === selectedImages[1].classList[0]) {
          document.getElementById("para").textContent = "You are a human. Congratulations!";
        } else {
          document.getElementById("para").textContent = "We can't verify you as a human. You selected the non-identical tiles.";
        }
        verifyButton.classList.add("hidden");
      });
    }
    const resetButton = document.getElementById("reset");
    resetButton.classList.remove("hidden");
    resetButton.addEventListener("click", () => {
      selectedImages.forEach(img => {
        img.classList.remove("selected");
      });
      selectedImages = [];
      document.getElementById("verify").classList.add("hidden");
      resetButton.classList.add("hidden");
      document.getElementById("para").textContent = "";
    });
  });
});