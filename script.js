let button = document.getElementById('reset');
let randomsequence=document.getElementById('random-sequence');
let arrayOfImages = document.getElementsByClassName('images');

button.addEventListener('click', newArray);

 function newArray() {
   randomsequence.innerHTML = "";
    let arr = ['img1', 'img2', 'img3', 'img4', 'img5'];
    arr.forEach((img)=>{
     randomsequence.innerHTML += `<img class="${img}"/>`;
    })
    randomsequence.innerHTML += `<img class="${arr[Math.floor(Math.random()*arr.length)]}"/>`;
 }