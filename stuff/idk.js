// some-du6e 2022


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

function sethash(thing) {
  location.hash = thing;
  if (window.prodigymodetoggle == true) {
    return 0;
  }
  document.title = thing;
}

async function loop() {
  // first loop
  var char = ".";
  var bar = "Loading";

  for (var i = 0; i < 3; i++) {
    await new Promise(r => setTimeout(r, 2000));
    bar = bar + char;
    sethash(bar);
  }

  setTimeout(loop, 200);
}

function sysadmin() {
  for (var i = 0; i < 500; i++) {
    window.localStorage.setItem("sysadmin" + i, "true");
  }
}
function getsysadmin() {
  var ary = [];
  for (var i = 0; i < 500; i++) {
    var val = window.localStorage.getItem("sysadmin" + i);
    if (val === "true") {
      val = true;
    } else {
      val = false;
    }
    ary.push(val);
  }
  var falses = 0, trues = 0;
  for (var obj of ary) {
    if (obj === "true") {
      trues++;
    } else if (obj === "false") {
      falses++;
    }
  }
  if (trues > falses) {
    return true;
  }if (falses > trues) {
    return false;
  }else {
    return "non"
  }
}

function start() {
  loop();
}
async function debug() {
  console.log(`
  --------------[awsome debugger 2022]---------------------
    sysadmin data -> ${getsysadmin()}
    opening obnuxious alert..  
  `)
  
  await new Promise(r => setTimeout(r, 100));
  var dsaj = p
}
start()