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

async function httpGet(theUrl)
{
   let response = await fetch(theUrl);
   let data = await response.text();
   return data
}


function isnewversion() {
   var get = httpGet("https://some-du6e.github.io/games/version")
   
   console.log(get)
   if (versionrn == get) {
      return true
   }else {
      return false
   }
}

function hasinternet() {
   var get = httpGet("https://some-du6e.github.io/games/internetcheck")
   var get2 = get
   console.log(get2)
   sleep(500)
   console.log(get2)
   if (get2== "true") {
      get = true
   }else {
      get2 = false
   }
   
}
function main() {
   if (isnewversion) {
     
   }else {
      
   }
}
//writecss("#updatescreen {visibility: visible !important;}")
//writecss("#menu {display: none !important;}")
hasinternet()
