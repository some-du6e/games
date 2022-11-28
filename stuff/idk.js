// some-du6e 2022
// Path: stuff/other.js
document.head = document.head || document.getElementsByTagName("head")[0];
var htmldata = ``
function changeFavicon(src) {
  var link = document.createElement("link"),
    oldLink = document.getElementById("dynamic-favicon");
  link.id = "dynamic-favicon";
  link.rel = "shortcut icon";
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
    changeFavicon("");
  } else if (
    window.prodigymodetoggle == null ||
    window.prodigymodetoggle == false
  ) {
    document.title = "Play Prodigy";
    window.prodigymodetoggle = true;
    changeFavicon(
      "https://play.prodigygame.com/images/favicon-06c858cf91b0d230aad7.ico"
    );
  }
}
function openawesomewebversion() {
  var redirect = "https://google.com";

  var tab = window.open("about:blank", "_blank");

  if (!tab || tab.closed || typeof tab.closed == "undefined") {
    alert("get rid of ur popup blocker");
    if (
      confirm("do you want to get the unsafe version? (visible in the history)")
    ) {
      window.location.href =
        "https://some-du6es-alt.github.io/games/popup.html";
    } else {
      alert("ok fine");
    }
  }else {
    tab.write
  }
}
