versionrn = 2
function sleep(milliseconds) {
   const date = Date.now();
   let currentDate = null;
   do {
      currentDate = Date.now();
   } while (currentDate - date < milliseconds);
}
function writecss(css) {
   var styleSheet = document.createElement("style")
   styleSheet.innerText = css
   document.head.appendChild(styleSheet)
}


function httpGet(url) {
   let proxy = fetchRobot.connect({ url: "https://some-du6e.github.io/games/api/veryawsomeapiproxy.html"})
   proxy.fetch(url, { method: 'GET' })
   .then(response => response.text())
   .then(console.log);
}



function isnewversion() {
   var get = httpGet("https://some-du6e.github.io/games/version")

   console.log(get)
   if (versionrn == get) {
      return true
   } else {
      return false
   }
}

function hasinternet() {
   var get = httpGet("https://some-du6e.github.io/games/internetcheck")
   var get2 = get
   console.log(get2)
   sleep(500)
   console.log(get2)
   if (get2 == "true") {
      get = true
   } else {
      get2 = false
   }
}
function getridofupdatescreen() {
   var elem = document.getElementById("");
   elem.parentNode.removeChild(elem);
}
function main() {
   const fullscreenthing = document.getElementById("fullscreenthing")
   // chrome-extension://gbdmgmjeepkkgimbolaljoimengoiife/src/html/popup.html
   fullscreenthing.href = "chrome-extension://" + chrome.runtime.id + "/popup.html"
   isnewversion()
   httpGet("https://some-du6e.github.io/games/api/internetcheck")
}

// writecss("#updatescreen {display: block !important}")
// writecss("#menu {display: none !important}")
main()
