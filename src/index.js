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

// Runs when the page loads: loads reviews, renders star average, and sets up form handler
window.onload = () => {
  loadReviews(); 
  renderStars();
  document.querySelector("button").onclick = handleForm;
} 

// Calculates and displays the average star rating
function renderStars() {
  const p = document.querySelector(".starRating");
  p.textContent = "Star rating: " + calculateStarAverage(reviews);
} 

// Handles the form submission: adds a new review and updates the display
function handleForm(event) {
  event.preventDefault();

  const newReview = {
    username: document.querySelector("#username").value,
    image: document.querySelector("#image").value,
    star: Number(document.querySelector("#star").value),
    review: document.querySelector("#review").value
  }

  reviews.push(newReview);
  const reviewArea = document.querySelector(".reviews");
  addElement(newReview, reviewArea);
  renderStars();
}

// Loads and displays all reviews from the array
function loadReviews() {
  const reviewArea = document.querySelector(".reviews");
  for(let review of reviews){
    addElement(review, reviewArea);
  }
}

// Creates and appends HTML elements for a single review
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
