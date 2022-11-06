var hellos = Array("hello", "whats up", "welcome", "sup", "hi")
var randomhello = hellos[Math.floor(Math.random() * hellos.length)];
document.write(`<h1 id="hellothing">`+ randomhello +`</h1>`)