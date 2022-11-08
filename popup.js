versionrn = 0

function writecss(css) {
   var styleSheet = document.createElement("style")
   styleSheet.innerText = css
   document.head.appendChild(styleSheet)
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


function isnewversion() {
   var get = httpGet("https://cors-anywhere.herokuapp.com/some-du6e.github.io/games/version")
   if (versionrn == get) {
      return true
   }else {
      return false
   }
}

function main() {
   if (isnewversion) {
     
   }else {
      
   }
}
//writecss("#updatescreen {visibility: visible !important;}")
//writecss("#menu {display: none !important;}")
