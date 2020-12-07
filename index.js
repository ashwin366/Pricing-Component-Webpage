
var toggle = document.querySelector(".switch");
var price = document.querySelectorAll(".toggle-price");
var card = document.querySelectorAll(".card");

toggle.addEventListener("click", function(){
  var t = 300;
  for (var i = 0; i< price.length; i++){
    card[i].classList.toggle("flip");
    delay(i,t);
    t = t + 500;
  }
})

function delay(i,t){
  setTimeout(function(){
      // card[i].classList.toggle("flip-x");
      price[i].classList.toggle("hidden");
  },t);
}
