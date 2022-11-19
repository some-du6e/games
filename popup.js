versionrn = 2;
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
function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  var realurl = "https://uncors.vercel.app?url=" + theUrl;
  xmlHttp.open("GET", realurl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

function isnewversion() {
  var get = httpGet("https://some-du6e.github.io/games/version");

  console.log(get);
  if (versionrn == get) {
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

function toggleupdatescreen() {
  if (
    document.getElementById("updatescreeninupdatescreen").style.display ==
    "block"
  ) {
    document.getElementById("updatescreeninupdatescreen").style.display =
      "none";
  } else {
    document.getElementById("updatescreeninupdatescreen").style.display =
      "block";
  }
}
const fullscreenthing = document.getElementById("fullscreenthing");
// chrome-extension://gbdmgmjeepkkgimbolaljoimengoiife/src/html/popup.html
fullscreenthing.href =
  "chrome-extension://" + chrome.runtime.id + "/popup.html";
isnewversion()