var hellos = Array("hello", "whats up", "welcome", "sup", "hi")
var randomhello = hellos[Math.floor(Math.random() * hellos.length)];
const element = document.getElementById("id01");
element.innerHTML = randomhello;