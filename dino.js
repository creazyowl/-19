const dino = document.getElementsById("dino")
const dino = document.getElementsById("cuctus")

document.addEventListener("keydown",function(event){
    jamp();
});

function jamp () {
   if (dino.clasList != "jamp") {
    dino.clasList.add ("jamp")
   }
   setTimeout( function() {
       dino.classList.remove("jamp")
   }, 300)
}

let isAlive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft < 0&& dinoTop >= 140) {
        alert("GAME OVER!!!")
    }
}, 10)