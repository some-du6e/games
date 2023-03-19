function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function writecss(css) {
  var styleSheet = document.createElement("style");
  styleSheet.innerText = css;
  document.head.appendChild(styleSheet);
}

//function to get plain text from a site
function httpGet(theUrl, nocors) {
  var xmlHttp = new XMLHttpRequest();
  if (nocors == true) {
    var realurl = theUrl;
  } else {
    var realurl = "https://uncors.vercel.app?url=" + theUrl;
  }
  xmlHttp.open("GET", realurl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

function isnewversion() {
  var get = httpGet("https://some-du6e.github.io/games/version");

  console.log(get);
  if (version == get) {
    return true;
  } else {
    return false;
  }
}

function hasinternet() {
  var get = httpGet("https://some-du6e.github.io/games/internetcheck");
  if (get == "true") {
    get = true;
  } else {
    get = false;
  }
  return get;
}
function randomcat() {
  var json  = httpGet("https://cataas.com/cat", true)
  var lol = json
  console.log(lol)
  return lol
}
function setrandomcat() {
  console.log("eric cartman")
  document.getElementById("cat").src = "https://cataas.com/cat"
}
