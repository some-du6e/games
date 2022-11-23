// some-du6e 2022
// Path: stuff/other.js
document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
  var link = document.createElement('link'),
    oldLink = document.getElementById('dynamic-favicon');
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}
function prodigymode() {
  if (window.prodigymodetoggle == true) {
    document.title = "some-du6e games";
    window.prodigymodetoggle = false;
    changeFavicon("")
  } else if (window.prodigymodetoggle == null || window.prodigymodetoggle == false) {
    document.title = "Play Prodigy";
    window.prodigymodetoggle = true;
    changeFavicon("https://play.prodigygame.com/images/favicon-06c858cf91b0d230aad7.ico");
  }
}

function openawesomewebversion() {
  // fix
}