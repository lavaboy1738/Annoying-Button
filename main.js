const btn = document.querySelector("button")

btn.addEventListener("mouseover", function(){
    const width = Math.floor(Math.random()*(window.innerWidth - 190))
    const height = Math.floor(Math.random()*(window.innerHeight - 70))
    btn.style.top = `${height}px`
    btn.style.left = `${width}px`
    switch(Math.floor(Math.random()*7)){
        case 0:
            btn.innerText = "Close!";
            break;
        case 1:
            btn.innerText = "Almost!";
            break;
        case 3:
            btn.innerText = "Phew!";
            break;
        case 4:
            btn.innerText = "Nice Try~";
            break;
        case 5:
            btn.innerText = "Really?";
            break;
        case 6:
            btn.innerText = "Nope.";
            break;
    }
})

btn.addEventListener("click", function(){
    btn.innerText = "YOU GOT ME!"
    document.body.style.backgroundColor = "forestgreen"
})