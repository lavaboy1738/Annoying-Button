const btn = document.querySelector("button")

btn.addEventListener("mouseover", function(){
    const width = Math.floor(Math.random()*(window.innerWidth - 190))
    const height = Math.floor(Math.random()*(window.innerHeight - 70))
    btn.style.top = `${height}px`
    btn.style.left = `${width}px`
})

btn.addEventListener("click", function(){
    btn.innerText = "YOU GOT ME!"
    document.body.style.backgroundColor = "forestgreen"
})