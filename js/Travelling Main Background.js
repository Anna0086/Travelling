let pictures = ["Css/Photo/Rectangle 33.png", "Css/Photo/Rectangle 34.png", "Css/Photo/Rectangle 35.png", "Css/Photo/Rectangle.png"]
function random(pictures){
    let background = Math.round(Math.random() * pictures.length)
    return pictures[background]
}
function addbackground(){
    let element = document.querySelector("#main_random_background")
    let img = random(pictures) 
    element.style.backgroundImage = `url("${img}")`
}
setInterval(addbackground, 5000)