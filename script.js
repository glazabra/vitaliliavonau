var text = document.getElementById('overText');

text.addEventListener("mouseout", function() {
  text.textContent = "Vitali Liavonau";
});

text.addEventListener("mouseover", function() {
  text.textContent = "Виталий Леонов";
});

var textDev = document.getElementById('overTextDev');

textDev.addEventListener("mouseout", function() {
    textDev.textContent = "frontEnDDeveloper";
});

textDev.addEventListener("mouseover", function() {
    textDev.textContent = "Веб-разработчик";
});