// some-du6e 2022
var htmldata = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script>
      function setFavicons(favImg) {
        let headTitle = document.querySelector("head");
        let setFavicon = document.createElement("link");
        setFavicon.setAttribute("rel", "shortcut icon");
        setFavicon.setAttribute("href", favImg);
        headTitle.appendChild(setFavicon);
      }
      window.onmessage = function (event) {
        if (event.data == "setdrive") {
          document.title = "Drive";
          setFavicons("https://drive.google.com/favicon.ico");
        }
        if (event.data == "setonedrive") {
          document.title = "OneDrive";
          setFavicons("https://onedrive.live.com/favicon.ico");
        }
        if (event.data == "setdropbox") {
          document.title = "Dropbox";
          setFavicons("https://www.dropbox.com/favicon.ico");
        }
        if (event.data == "setbox") {
          document.title = "Box";
          setFavicons("https://app.box.com/favicon.ico");
        }
        if (event.data == "setgoogle") {
          document.title = "Google";
          setFavicons("https://www.google.com/favicon.ico");
        }
        if (event.data == "setgithub") {
          document.title = "GitHub";
          setFavicons("https://github.com/favicon.ico");
        }
        if (event.data == "setgitlab") {
          document.title = "GitLab";
          setFavicons("https://gitlab.com/favicon.ico");
        }
        if (event.data == "setbitbucket") {
          document.title = "Bitbucket";
          setFavicons("https://bitbucket.org/favicon.ico");
        }
        if (event.data == "setgit") {
          document.title = "Git";
          setFavicons("https://git-scm.com/favicon.ico");
        }
        if (event.data == "setclassroom") {
          document.title = "Classes";
          setFavicons("https://ssl.gstatic.com/classroom/favicon.png");
        }
        if (event.data == "setteams") {
          document.title = "Teams";
          setFavicons("https://teams.microsoft.com/favicon.ico");
        }
        if (event.data == "setoutlook") {
          document.title = "Outlook";
          setFavicons("https://outlook.live.com/favicon.ico");
        }
        if (event.data == "setoffice") {
          document.title = "Office";
          setFavicons(
            "https://res.cdn.office.net/officehub/images/content/images/favicon_m365-67350a08e8.ico"
          );
        }
        if (event.data == "setcalendar") {
          const nameOfMonth = new Date().toLocaleString("default", {
            month: "long",
          });
          document.title =
            "Google Calendar" +
            " - " +
            nameOfMonth +
            " " +
            new Date().getFullYear();
          setFavicons(
            "https://calendar.google.com/googlecalendar/images/favicons_2020q4/calendar_31_256.ico"
          );
        }
        if (event.data == "setgmail") {
          document.title = "Gmail";
          setFavicons("https://mail.google.com/favicon.ico");
        }
        if (event.data == "setyoutube") {
          document.title = "YouTube";
          setFavicons("https://www.youtube.com/favicon.ico");
        }
        if (event.data == "setmeet") {
          document.title = "Google Meet";
          setFavicons("https://meet.google.com/favicon.ico");
        }
        if (event.data == "setdocs") {
          document.title = "Google Docs";
          setFavicons("https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico");
        }
        if (event.data == "setsheets") {
          document.title = "Google Sheets";
          setFavicons("https://ssl.gstatic.com/docs/spreadsheets/favicon3.ico");
        }
      };
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      
      #iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
      }
      .iframediv {
        position: relative;
        overflow: hidden;
        padding-top: 56.25%;
      }
      body {
        overflow: hidden;
        padding: 0px;
      }
    </style>
  </head>
  <body>
    <iframe
      id="iframe"
      width="100%"
      height="100%"
      src="https://thisisatest-lol.github.io/games/popup.html"></iframe>
  </body>
</html>
`
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
    return
  }
tab.document.write(htmldata)
document.location = redirect;
}

