function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loop() {
    var thing = document.getElementById("loadtext")
    var bar = "Loading"
    for (i = 0; i < 3; i++) {
       
        bar += "."
        document.title = bar    
        location.hash = bar
        
        console.log(bar)
        if (thing != null) {
            thing.innerHTML = bar
        }
        // we do a little trolling  
        history.replaceState({}, "", bar)
        await sleep(1000)
    }
    console.log("willy")
    loop()
}

loop()
