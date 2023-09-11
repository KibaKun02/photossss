const comeback=document.getElementById("comeback");
comeback.addEventListener("click",function(){
    window.location.href="./main.html";
});
const display=document.getElementById("imagedisplay");
const forward=document.getElementById("forward");
const backward=document.getElementById("backward");
var images=["./imgs/shinobu1.jpg","./imgs/shinobu2.jpg","./imgs/shinobu3.jpg","./imgs/shinobu4.jpg","./imgs/shinobu5.jpg"];
var currentindex=0;
forward.addEventListener("click",() =>{
    currentindex--;
    if(currentindex<0){

        currentindex=images.length-1;
    }
    display.src=images[currentindex];
})
backward.addEventListener("click",() =>{
    currentindex++;
    if(currentindex>=images.length){
        currentindex=0
    }
    display.src=images[currentindex];
})