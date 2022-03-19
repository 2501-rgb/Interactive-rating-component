// Get all needed Elements
let ratingElements = document.querySelectorAll(".rating__item");
let submitBtn = document.querySelector(".card__submitBtn");
let img = document.querySelector(".img__container");
let ratingText = document.createElement("span");
let ratingValue;

// Function to remove active State
function removeActiveState() {
  ratingElements.forEach((element) => {
    element.classList.remove("active");
  });
}

// ForEach-Method to listen and active state + call removeActiveState function
ratingElements.forEach((element) => {
  element.addEventListener("click", function () {
    removeActiveState();
    element.classList.add("active");
    ratingValue = element.innerHTML;
  });
});

// Eventlistener for Submit Button
// prettier-ignore
submitBtn.addEventListener("click", function () {
  img.remove();
  ratingText.classList.add("thankyou__paragraph")
  ratingText.textContent = `You have selected ${ratingValue} out of ${ratingElements.length}`;
  
  document.querySelector(".card__heading").insertAdjacentElement("beforebegin", ratingText);
  
  let thankYouImg = document.createElement("img");
  thankYouImg.classList.add("thankyou__img");
  thankYouImg.src = "assets/images/illustration-thank-you.svg";
  thankYouImg.style.margin = "0 auto";
  thankYouImg.style.maxWidth = "200px";
  thankYouImg.style.height = "auto";

  ratingText.insertAdjacentElement("beforebegin",thankYouImg);
  
  document.querySelector(".card__rating").remove();
  submitBtn.remove();

  document.querySelector(".card__heading").style.textAlign = "center";
  document.querySelector(".card__heading").textContent = "Thank you!";
  document.querySelector(".card__description").style.textAlign = "center";
  document.querySelector(".card__description").textContent =
    "We appreciate you taking the time to give rating. If you ever need more support, dont hesitate to get in touch!";
});
