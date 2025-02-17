let effect = document.getElementById("effect")

effect.addEventListener("mousemove" , (e) =>{
let x = e.pageX ;
let y = e.pageY ;


effect.style.top = y + "px";   
effect.style.left = x + "px";

})