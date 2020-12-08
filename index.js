var toggle = document.querySelector(".switch");
var card = document.querySelectorAll(".card-holder");
var i = 0;

toggle.addEventListener("click", function() {

  for (i = 0; i < card.length; i++) {
    card[i].classList.toggle("flip");
  }

})
