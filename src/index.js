import { calculateStarAverage } from "./logic.js";
//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////

window.onload = () => {
  loadReviews(); 
} 


function loadReviews() {
  const reviewArea = document.querySelector(".reviews");
  for(let review of reviews){
    //console.log(review);
    addElement(review, reviewArea);
  }
}

function addElement(review, reviewArea){
  const container = document.createElement('div');
  container.className = "review_container"; 

  const img = document.createElement("img");
  img.src = review.image; 

  const textDiv = document.createElement("div");

  const username = document.createElement("p");
  username.textContent = review.username;

  const stars = document.createElement("p");
  stars.textContent = `${review.star} stars`;

  const reviewinfo = document.createElement("p");
  reviewinfo.textContent = review.review; 
  textDiv.appendChild(username);
  textDiv.appendChild(stars);
  textDiv.appendChild(reviewinfo); 

  container.appendChild(img);
  container.appendChild(textDiv);

  reviewArea.appendChild(container);
}