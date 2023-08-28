// let button = document.getElementById('reset');
// let randomsequence=document.getElementById('random-sequence');
// let arrayOfImages = document.getElementsByClassName('images');

// button.addEventListener('click', newArray);

//  function newArray() {
//    randomsequence.innerHTML = "";
//     let arr = ['img1', 'img2', 'img3', 'img4', 'img5'];
//     arr.forEach((img)=>{
//      randomsequence.innerHTML += `<img class="${img}"/>`;
//     })
//     randomsequence.innerHTML += `<img class="${arr[Math.floor(Math.random()*arr.length)]}"/>`;
//  }

const images = document.querySelectorAll(".img");
const resetButton = document.getElementById("reset");
const verifyButton = document.getElementById("verify");
const para = document.getElementById("para");

let clickedImages = [];

// Function to randomly arrange the images.
function randomizeImages() {
  images.forEach((image) => {
    image.style.order = Math.floor(Math.random() * 6);
  });
}

// Function to handle the click event on an image.
function handleImageClick(event) {
  const image = event.target;

  // Check if the image has already been clicked.
  if (clickedImages.includes(image)) {
    return;
  }

  clickedImages.push(image);

  // If two images have been clicked, show the verify button.
  if (clickedImages.length === 2) {
    verifyButton.classList.remove("hidden");
  }

  // If the reset button is clicked, reset the state.
  if (event.target === resetButton) {
    clickedImages = [];
    verifyButton.classList.add("hidden");
    para.innerHTML = "";
  }
}

// Function to handle the click event on the verify button.
function handleVerifyClick() {
  // Check if the two clicked images are identical.
  if (clickedImages[0].classList.contains(clickedImages[1].classList[0])) {
    para.innerHTML = "You are a human. Congratulations!";
  } else {
    para.innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
  }

  // Reset the state.
  clickedImages = [];
  verifyButton.classList.add("hidden");
}

// Initialize the code.
randomizeImages();

// Attach event listeners to the images and buttons.
images.forEach((image) => {
  image.addEventListener("click", handleImageClick);
});

resetButton.addEventListener("click", handleResetClick);

verifyButton.addEventListener("click", handleVerifyClick);
