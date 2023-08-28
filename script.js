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

//your code here
let resetbtn = document.querySelector("#reset");
let verifybtn = document.querySelector("#verify");


let imgtag = document.createElement("img");
let randomvalue = Math.floor(Math.random()*5) +1;
imgtag.setAttribute("class",`img${randomvalue}`);
document.querySelector(".flex").appendChild(imgtag);


let images = document.querySelectorAll("img");

images.forEach((image) => {
    image.addEventListener("click", () => {
        image.classList.toggle("selected");

        if(isrestbtnvalid()){
         resetbtn.style.display="inline-block";
        }
        else{
            resetbtn.style.display="none";
        }

        if(isverifybtnvalid()){
            verifybtn.style.display="inline-block";
           }
           else{
               verifybtn.style.display="none";
           }

    });

});


function isrestbtnvalid(){
    for(let i=0;i<images.length;i++){
        if(images[i].classList.contains("selected")){
            return true;
        }      
    }
    return false;
}

function isverifybtnvalid(){
    let count=0;
    for(let i=0;i<images.length;i++){
        if(images[i].classList.contains("selected")){
            count++;
        }      
    }
    return (count==2);
}

resetbtn.addEventListener("click", () => {
    for(let i=0;i<images.length;i++){
        if(images[i].classList.contains("selected")){
            images[i].classList.remove("selected");
        }      
    }
    resetbtn.style.display="none";

    let ps = document.querySelectorAll("p");
    ps.forEach((p) =>{
        document.querySelector("main").removeChild(p);
    });
    
});

verifybtn.addEventListener("click", () => {
    let p = document.createElement("p");
    p.setAttribute("id","para");


  let classarr = document.querySelectorAll(".selected");
  if(classarr[0].getAttribute("class")==classarr[1].getAttribute("class")){
     p.innerText = "You are a human. Congratulations!"
  }
  else{
    p.innerText = "We can't verify you as a human. You selected the non-identical tiles."
  }

  document.querySelector("main").appendChild(p);
  verifybtn.style.display="none";

  for(let i=0;i<images.length;i++){
    if(images[i].classList.contains("selected")){
        images[i].classList.remove("selected");
    }      
 }
   
});

